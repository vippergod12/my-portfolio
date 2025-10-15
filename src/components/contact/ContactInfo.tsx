import React from 'react'
import { FaUser, FaMapMarkerAlt, FaEnvelope, FaPhone } from 'react-icons/fa'
import "./ContactInfo.css"
interface InfoItemProps{
    icon: React.ReactNode;
    label: string;
    value: string;
}

const InfoItem: React.FC<InfoItemProps> = ({icon, label, value}) => {
    return (
        <div className = "flex items-center gap-6 z-71">
            <div className= "text-sky-400 text-3xl">
                {icon}
            </div>
            <div className="">
                <p className="text-gray-400  label-customize-font ">{label}</p>
                <p className="text-white font-semibold text-customize-font">{value}</p>
            </div>
        </div>
    );
};

const ContactInfo: React.FC = () => {
    const contactDetails = [
        {
      icon: <FaUser />,
      label: 'Name',
      value: 'Dang Nhat Tien',
    },
    {
      icon: <FaPhone />,
      label: 'Phone',
      value: '0839056653',
    }
    ,
    {
      icon: <FaEnvelope />,
      label: 'Email',
      value: 'dangnhattien1101@gmail.com',
    },
    {
      icon: <FaMapMarkerAlt />,
      label: 'Address',
      value: 'Ho Chi Minh City, Vietnam',
    }
    ];
    return (
        <div className="flex flex-col gap-y-8">
            {contactDetails.map((item, index) => (
                    <InfoItem 
                    key={index}
                    icon={item.icon}
                    label={item.label}
                    value={item.value}
                    />
            ))}
        </div>
    );
};

export default ContactInfo;