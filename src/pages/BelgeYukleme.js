import React, { useState, useRef } from 'react';
import { 
  Upload, 
  File, 
  CheckCircle, 
  AlertCircle, 
  X, 
  Eye,
  Download,
  Plus,
  Search,
  Filter
} from 'lucide-react';
import './BelgeYukleme.css';

const BelgeYukleme = () => {
  const [uploadedFiles, setUploadedFiles] = useState([
    {
      id: 1,
      name: 'Sözleşme.pdf',
      size: '2.4 MB',
      type: 'PDF',
      status: 'Onaylandı',
      uploadDate: '15.01.2024',
      davaNo: '2024/123',
      color: '#059669'
    },
    {
      id: 2,
      name: 'Fatura_001.pdf',
      size: '1.8 MB',
      type: 'PDF',
      status: 'Beklemede',
      uploadDate: '14.01.2024',
      davaNo: '2024/124',
      color: '#f59e0b'
    },
    {
      id: 3,
      name: 'Kimlik_Fotokopisi.jpg',
      size: '856 KB',
      type: 'JPG',
      status: 'Reddedildi',
      uploadDate: '13.01.2024',
      davaNo: '2024/123',
      color: '#dc2626'
    }
  ]);

  const [searchTerm, setSearchTerm] = useState('');
  const [filterStatus, setFilterStatus] = useState('all');
  const [isUploadModalOpen, setIsUploadModalOpen] = useState(false);
  const [selectedDava, setSelectedDava] = useState('');
  const [dragActive, setDragActive] = useState(false);
  const fileInputRef = useRef(null);

  const davalar = [
    { value: '2024/123', label: '2024/123 - Sözleşme İhlali' },
    { value: '2024/124', label: '2024/124 - Tazminat Davası' },
    { value: '2023/456', label: '2023/456 - İcra Takibi' }
  ];

  const filteredFiles = uploadedFiles.filter(file => {
    const matchesSearch = file.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         file.davaNo.toLowerCase().includes(searchTerm.toLowerCase());
    
    const matchesFilter = filterStatus === 'all' || 
                         file.status.toLowerCase().includes(filterStatus.toLowerCase());
    
    return matchesSearch && matchesFilter;
  });

  const handleDrag = (e) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === "dragenter" || e.type === "dragover") {
      setDragActive(true);
    } else if (e.type === "dragleave") {
      setDragActive(false);
    }
  };

  const handleDrop = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);
    
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      handleFiles(e.dataTransfer.files);
    }
  };

  const handleFiles = (files) => {
    Array.from(files).forEach(file => {
      const newFile = {
        id: Date.now() + Math.random(),
        name: file.name,
        size: formatFileSize(file.size),
        type: file.name.split('.').pop().toUpperCase(),
        status: 'Beklemede',
        uploadDate: new Date().toLocaleDateString('tr-TR'),
        davaNo: selectedDava || 'Seçilmedi',
        color: '#f59e0b'
      };
      setUploadedFiles(prev => [newFile, ...prev]);
    });
  };

  const formatFileSize = (bytes) => {
    if (bytes === 0) return '0 Bytes';
    const k = 1024;
    const sizes = ['Bytes', 'KB', 'MB', 'GB'];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
  };

  const handleFileInput = (e) => {
    if (e.target.files && e.target.files[0]) {
      handleFiles(e.target.files);
    }
  };

  const removeFile = (id) => {
    setUploadedFiles(prev => prev.filter(file => file.id !== id));
  };

  const getStatusIcon = (status) => {
    switch (status) {
      case 'Onaylandı':
        return CheckCircle;
      case 'Beklemede':
        return AlertCircle;
      case 'Reddedildi':
        return X;
      default:
        return File;
    }
  };

  const getStatusColor = (status) => {
    switch (status) {
      case 'Onaylandı':
        return '#059669';
      case 'Beklemede':
        return '#f59e0b';
      case 'Reddedildi':
        return '#dc2626';
      default:
        return '#6b7280';
    }
  };

  return (
    <div className="belge-yukleme-page">
      <div className="page-header">
        <h2>Belge Yükleme</h2>
        <p>Dava belgelerinizi güvenli bir şekilde yükleyin</p>
      </div>

      <div className="upload-section">
        <div className="upload-card">
          <div className="upload-header">
            <h3>Yeni Belge Yükle</h3>
            <button 
              className="btn btn-primary"
              onClick={() => setIsUploadModalOpen(true)}
            >
              <Plus size={20} />
              <span>Belge Ekle</span>
            </button>
          </div>
          
          <div 
            className={`upload-area ${dragActive ? 'drag-active' : ''}`}
            onDragEnter={handleDrag}
            onDragLeave={handleDrag}
            onDragOver={handleDrag}
            onDrop={handleDrop}
            onClick={() => fileInputRef.current?.click()}
          >
            <Upload size={48} />
            <h4>Belgeleri buraya sürükleyin</h4>
            <p>veya tıklayarak seçin</p>
            <span className="upload-formats">PDF, JPG, PNG, DOC, DOCX</span>
          </div>
          
          <input
            ref={fileInputRef}
            type="file"
            multiple
            accept=".pdf,.jpg,.jpeg,.png,.doc,.docx"
            onChange={handleFileInput}
            style={{ display: 'none' }}
          />
        </div>
      </div>

      <div className="search-filters">
        <div className="search-box">
          <Search size={20} />
          <input
            type="text"
            placeholder="Belge adı veya dava no ara..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
        
        <div className="filter-dropdown">
          <Filter size={20} />
          <select
            value={filterStatus}
            onChange={(e) => setFilterStatus(e.target.value)}
          >
            <option value="all">Tüm Durumlar</option>
            <option value="onaylandı">Onaylandı</option>
            <option value="beklemede">Beklemede</option>
            <option value="reddedildi">Reddedildi</option>
          </select>
        </div>
      </div>

      <div className="files-section">
        <div className="section-header">
          <h3>Yüklenen Belgeler ({filteredFiles.length})</h3>
        </div>
        
        <div className="files-list">
          {filteredFiles.length === 0 ? (
            <div className="no-files">
              <File size={48} />
              <h4>Henüz belge yüklenmemiş</h4>
              <p>İlk belgenizi yüklemek için yukarıdaki alanı kullanın.</p>
            </div>
          ) : (
            filteredFiles.map((file) => {
              const StatusIcon = getStatusIcon(file.status);
              return (
                <div key={file.id} className="file-card">
                  <div className="file-info">
                    <div className="file-icon">
                      <File size={24} />
                    </div>
                    <div className="file-details">
                      <h4>{file.name}</h4>
                      <div className="file-meta">
                        <span className="file-size">{file.size}</span>
                        <span className="file-type">{file.type}</span>
                        <span className="file-date">{file.uploadDate}</span>
                      </div>
                      <div className="file-dava">
                        <strong>Dava No:</strong> {file.davaNo}
                      </div>
                    </div>
                  </div>
                  
                  <div className="file-status">
                    <div 
                      className="status-badge"
                      style={{ backgroundColor: getStatusColor(file.status) }}
                    >
                      <StatusIcon size={16} />
                      <span>{file.status}</span>
                    </div>
                  </div>
                  
                  <div className="file-actions">
                    <button className="action-btn" title="Görüntüle">
                      <Eye size={16} />
                    </button>
                    <button className="action-btn" title="İndir">
                      <Download size={16} />
                    </button>
                    <button 
                      className="action-btn danger" 
                      title="Sil"
                      onClick={() => removeFile(file.id)}
                    >
                      <X size={16} />
                    </button>
                  </div>
                </div>
              );
            })
          )}
        </div>
      </div>

      {/* Upload Modal */}
      {isUploadModalOpen && (
        <div className="modal-overlay" onClick={() => setIsUploadModalOpen(false)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <div className="modal-header">
              <h3>Belge Yükle</h3>
              <button 
                className="close-btn"
                onClick={() => setIsUploadModalOpen(false)}
              >
                <X size={24} />
              </button>
            </div>
            
            <div className="modal-body">
              <div className="form-group">
                <label className="form-label">Dava Seçin</label>
                <select 
                  className="form-input"
                  value={selectedDava}
                  onChange={(e) => setSelectedDava(e.target.value)}
                >
                  <option value="">Dava seçin...</option>
                  {davalar.map(dava => (
                    <option key={dava.value} value={dava.value}>
                      {dava.label}
                    </option>
                  ))}
                </select>
              </div>
              
              <div className="form-group">
                <label className="form-label">Belge Açıklaması</label>
                <textarea 
                  className="form-input"
                  rows="3"
                  placeholder="Belge hakkında açıklama yazın..."
                />
              </div>
            </div>
            
            <div className="modal-footer">
              <button 
                className="btn btn-secondary"
                onClick={() => setIsUploadModalOpen(false)}
              >
                İptal
              </button>
              <button 
                className="btn btn-primary"
                onClick={() => {
                  setIsUploadModalOpen(false);
                  fileInputRef.current?.click();
                }}
              >
                Belge Seç
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default BelgeYukleme;
