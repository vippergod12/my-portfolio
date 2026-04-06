import React from 'react';
import { FaUser, FaMapMarkerAlt, FaEnvelope, FaPhone } from 'react-icons/fa';
import './ContactInfo.css';

interface InfoItemProps {
  icon: React.ReactNode;
  label: string;
  value: string;
}

const InfoItem: React.FC<InfoItemProps> = ({ icon, label, value }) => (
  <div className="flex items-center gap-5 z-[71]">
    <div className="w-12 h-12 rounded-xl bg-violet-500/10 flex items-center justify-center text-violet-600 dark:text-violet-400 text-lg shrink-0">
      {icon}
    </div>
    <div>
      <p className="text-sm text-zinc-500 dark:text-zinc-400">{label}</p>
      <p className="text-base font-semibold text-zinc-900 dark:text-white break-all">{value}</p>
    </div>
  </div>
);

const ContactInfo: React.FC = () => {
  const contactDetails = [
    { icon: <FaUser />, label: 'Name', value: 'Dang Nhat Tien' },
    { icon: <FaPhone />, label: 'Phone', value: '0839056653' },
    { icon: <FaEnvelope />, label: 'Email', value: 'dangnhattien1101@gmail.com' },
    { icon: <FaMapMarkerAlt />, label: 'Address', value: 'Ho Chi Minh City, Vietnam' },
  ];

  return (
    <div className="flex flex-col gap-y-6">
      {contactDetails.map((item, index) => (
        <InfoItem key={index} icon={item.icon} label={item.label} value={item.value} />
      ))}
    </div>
  );
};

export default ContactInfo;
