import React from 'react';
import { Link } from 'react-router-dom';
import { 
  FileText, 
  Upload, 
  Calendar, 
  User, 
  Clock, 
  CheckCircle,
  AlertCircle,
  Info,
  Folder,
  Briefcase,
  Bell,
  Settings,
  CreditCard,
  Search,
  Building,
  File,
  Building2,
  Calendar as CalendarIcon,
  Bell as BellIcon,
  Settings as SettingsIcon,
  User as UserIcon
} from 'lucide-react';
import './Home.css';

const Home = () => {
  const quickActions = [
    {
      title: 'Dosya Sorgulama',
      description: 'Dosya durumunu sorgulayın',
      icon: Folder,
      path: '/dosya-sorgulama',
      color: '#f97316',
      strokeWidth: 2
    },
    {
      title: 'Danıştay Dosya Sorgulama',
      description: 'Danıştay dosyalarını sorgulayın',
      icon: Folder,
      path: '/dava-takip',
      color: '#f97316',
      strokeWidth: 2
    },
    {
      title: 'Duruşmalarım',
      description: 'Duruşma bilgilerinizi görün',
      icon: Briefcase,
      path: '/randevu-alma',
      color: '#dc2626',
      strokeWidth: 2
    },
    {
      title: 'Ajandam',
      description: 'Takviminizi görüntüleyin',
      icon: CalendarIcon,
      path: '/randevu-alma',
      color: '#3b82f6',
      strokeWidth: 2
    },
    {
      title: 'Bildirimlerim',
      description: 'Bildirimlerinizi kontrol edin',
      icon: BellIcon,
      path: '/bildirimlerim',
      color: '#059669',
      strokeWidth: 2
    },
    {
      title: 'Bildirim Ayarları',
      description: 'Bildirim tercihlerinizi ayarlayın',
      icon: SettingsIcon,
      path: '/hesabim',
      color: '#6b7280',
      strokeWidth: 2
    },
    {
      title: 'Bilgilerim',
      description: 'Kişisel bilgilerinizi görüntüleyin',
      icon: UserIcon,
      path: '/hesabim',
      color: '#1e40af',
      strokeWidth: 2
    }
  ];

  const recentActivities = [
    {
      id: 1,
      type: 'dava',
      title: 'Ticaret Mahkemesi Dava No: 2024/123',
      status: 'Devam Ediyor',
      date: '15.01.2024',
      icon: FileText,
      color: '#1e40af'
    },
    {
      id: 2,
      type: 'belge',
      title: 'Sözleşme belgesi yüklendi',
      status: 'Onaylandı',
      date: '14.01.2024',
      icon: CheckCircle,
      color: '#059669'
    },
    {
      id: 3,
      type: 'randevu',
      title: 'Mahkeme duruşması randevusu',
      status: 'Beklemede',
      date: '13.01.2024',
      icon: Clock,
      color: '#f59e0b'
    }
  ];

  const notifications = [
    {
      id: 1,
      type: 'info',
      title: 'Yeni dava durumu güncellendi',
      message: 'Dava No: 2024/123 için yeni bir gelişme var.',
      time: '2 saat önce',
      icon: Info
    },
    {
      id: 2,
      type: 'warning',
      title: 'Belge eksikliği',
      message: 'Dava No: 2024/124 için eksik belgeler mevcut.',
      time: '1 gün önce',
      icon: AlertCircle
    }
  ];

  return (
    <div className="home-page">
      <div className="quick-actions">
        <div className="actions-grid">
          {quickActions.map((action, index) => {
            const Icon = action.icon;
            return (
              <Link key={index} to={action.path} className="action-card">
                <div className="action-icon">
                  <Icon 
                    size={40} 
                    color={action.color}
                    strokeWidth={2.5}
                    fill="none"
                  />
                </div>
                <div className="action-content">
                  <h4>{action.title}</h4>
                </div>
              </Link>
            );
          })}
        </div>
      </div>

    </div>
  );
};

export default Home;
