import { useCallback, useEffect, useRef, useState } from 'react';
import { MdDarkMode, MdLightMode, MdPalette } from 'react-icons/md';
import { useTheme, type Theme } from '../../context/ThemeContext';

const RIPPLE_MS = 900;
const FADE_MS = 200;
const EDGE_PX = 3;
const BLUR_PX = 6;
const SWITCH_AT = 0.84;

const DARK_BG = '#09090b';
const LIGHT_BG = '#fafafa';

function easeInOutQuad(x: number) {
  return x < 0.5 ? 2 * x * x : 1 - Math.pow(-2 * x + 2, 2) / 2;
}

const ThemeToggle = () => {
  const { theme, setTheme } = useTheme();
  const [open, setOpen] = useState(false);
  const panelRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const blurRingRef = useRef<HTMLDivElement | null>(null);
  const animating = useRef(false);
  const rafId = useRef(0);

  useEffect(() => {
    const el = document.createElement('div');
    el.style.cssText = [
      'position:fixed', 'inset:0', 'z-index:5',
      'pointer-events:none', 'visibility:hidden',
      `backdrop-filter:blur(${BLUR_PX}px)`,
      `-webkit-backdrop-filter:blur(${BLUR_PX}px)`,
    ].join(';');
    el.setAttribute('aria-hidden', 'true');
    document.body.appendChild(el);
    blurRingRef.current = el;
    return () => {
      el.remove();
    };
  }, []);

  useEffect(() => {
    if (!open) return;
    const onDown = (e: MouseEvent) => {
      const t = e.target as Node;
      if (panelRef.current?.contains(t) || buttonRef.current?.contains(t)) return;
      setOpen(false);
    };
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setOpen(false);
    };
    document.addEventListener('mousedown', onDown);
    document.addEventListener('keydown', onKey);
    return () => {
      document.removeEventListener('mousedown', onDown);
      document.removeEventListener('keydown', onKey);
    };
  }, [open]);

  const rippleTransition = useCallback(
    (nextTheme: Theme) => {
      if (animating.current || nextTheme === theme) return;
      animating.current = true;

      const ring = blurRingRef.current;
      if (!ring) {
        setTheme(nextTheme);
        animating.current = false;
        return;
      }

      const cx = window.innerWidth / 2;
      const cy = window.innerHeight / 2;
      const maxR = Math.hypot(cx, cy) + EDGE_PX;

      const toDark = nextTheme === 'dark';

      document.body.style.backgroundAttachment = 'fixed';
      ring.style.visibility = 'visible';
      ring.style.opacity = '1';
      ring.style.transition = 'none';

      let switched = false;
      const t0 = performance.now();

      const tick = () => {
        const raw = Math.min((performance.now() - t0) / RIPPLE_MS, 1);
        const ease = easeInOutQuad(raw);
        const r = toDark ? ease * maxR : (1 - ease) * maxR;

        document.body.style.backgroundImage =
          `radial-gradient(circle at ${cx}px ${cy}px, ${DARK_BG} ${r}px, ${LIGHT_BG} ${r + EDGE_PX}px)`;

        const bm = `radial-gradient(circle at ${cx}px ${cy}px, transparent ${Math.max(0, r - EDGE_PX)}px, black ${r}px, transparent ${r + EDGE_PX}px)`;
        ring.style.maskImage = bm;
        ring.style.webkitMaskImage = bm;

        if (!switched && raw >= SWITCH_AT) {
          switched = true;
          setTheme(nextTheme);
        }

        if (raw < 1) {
          rafId.current = requestAnimationFrame(tick);
        } else {
          document.body.style.backgroundImage = '';
          document.body.style.backgroundAttachment = '';
          ring.style.transition = `opacity ${FADE_MS}ms ease`;
          ring.style.opacity = '0';
          setTimeout(() => {
            ring.style.visibility = 'hidden';
            ring.style.maskImage = '';
            ring.style.webkitMaskImage = '';
            ring.style.transition = 'none';
            animating.current = false;
          }, FADE_MS);
        }
      };

      rafId.current = requestAnimationFrame(tick);
    },
    [theme, setTheme],
  );

  useEffect(() => {
    return () => cancelAnimationFrame(rafId.current);
  }, []);

  const choose = (t: Theme) => {
    if (t === theme) {
      setOpen(false);
      return;
    }
    rippleTransition(t);
    setOpen(false);
  };

  return (
    <div className="fixed bottom-5 right-5 z-[10001] flex flex-col items-end gap-2">
      {open && (
        <div
          ref={panelRef}
          role="dialog"
          aria-label="Chọn giao diện"
          className="w-[min(calc(100vw-2.5rem),16rem)] rounded-xl border border-zinc-200 bg-white p-3 shadow-2xl dark:border-zinc-600 dark:bg-zinc-800"
        >
          <p className="mb-2 text-xs font-semibold uppercase tracking-wide text-zinc-500 dark:text-zinc-400">
            Nền trang
          </p>
          <div className="flex flex-col gap-2">
            <button
              type="button"
              onClick={() => choose('light')}
              className={`flex items-center gap-3 rounded-lg px-3 py-2.5 text-left text-sm font-medium transition-colors ${
                theme === 'light'
                  ? 'bg-violet-100 text-violet-900 dark:bg-violet-900/40 dark:text-violet-100'
                  : 'text-zinc-800 hover:bg-zinc-100 dark:text-zinc-200 dark:hover:bg-zinc-700/80'
              }`}
            >
              <MdLightMode className="h-5 w-5 shrink-0" aria-hidden />
              Giao diện sáng
            </button>
            <button
              type="button"
              onClick={() => choose('dark')}
              className={`flex items-center gap-3 rounded-lg px-3 py-2.5 text-left text-sm font-medium transition-colors ${
                theme === 'dark'
                  ? 'bg-violet-100 text-violet-900 dark:bg-violet-900/40 dark:text-violet-100'
                  : 'text-zinc-800 hover:bg-zinc-100 dark:text-zinc-200 dark:hover:bg-zinc-700/80'
              }`}
            >
              <MdDarkMode className="h-5 w-5 shrink-0" aria-hidden />
              Giao diện tối
            </button>
          </div>
        </div>
      )}

      <button
        ref={buttonRef}
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
        aria-haspopup="dialog"
        aria-label={open ? 'Đóng chọn giao diện' : 'Mở chọn giao diện'}
        className="flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-violet-500 via-purple-500 to-pink-500 text-white shadow-lg ring-2 ring-white/30 transition hover:scale-105 hover:brightness-110 focus:outline-none focus-visible:ring-4 focus-visible:ring-violet-400 dark:ring-zinc-900/50"
      >
        <MdPalette className="h-6 w-6" aria-hidden />
      </button>
    </div>
  );
};

export default ThemeToggle;
