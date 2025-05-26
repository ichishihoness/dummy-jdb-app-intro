import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styling/DocumentsPage.css';

interface DocumentsPageProps {
  onLogout: () => void;
  showAfspraakRow: boolean;
  setShowAfspraakRow: React.Dispatch<React.SetStateAction<boolean>>;
}

const DocumentsPage: React.FC<DocumentsPageProps> = ({ onLogout, showAfspraakRow, setShowAfspraakRow, }) => {
    const [dropdownOpen, setDropdownOpen] = useState(false);
    const [sortOrder, setSortOrder] = useState<'Naam' | 'Datum'>('Naam');
  const navigate = useNavigate();

    const handleSortClick = (order: 'Naam' | 'Datum') => {
    setSortOrder(order);
    setDropdownOpen(false);
  };

  return (
    <div className="documents-wrapper">
      
    </div>
  );
};

export default DocumentsPage;