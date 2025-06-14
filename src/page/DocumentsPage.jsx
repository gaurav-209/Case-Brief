import React, { useState } from 'react'
import { Search, Plus, FileText, Download, Trash2 } from 'lucide-react'
import Button from '../components/ui/Button'
import Card from '../components/ui/Card'
import Input from '../components/ui/Input'
import Select from '../components/ui/Select'
import Table, { TableRow, TableCell } from '../components/ui/Table'
import Modal from '../components/ui/Modal'
import { documents, getClientNameById, getCaseTitleById, getLawyerNameById, formatDate } from '../data/mockData'

const DocumentsPage = () => {
  const [searchTerm, setSearchTerm] = useState('')
  const [isUploadModalOpen, setIsUploadModalOpen] = useState(false)
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false)
  const [selectedDocument, setSelectedDocument] = useState(null)
  const [formData, setFormData] = useState({
    title: '',
    caseId: '',
    clientId: '',
    file: null
  })

   const filteredDocuments = documents.filter(doc =>
    doc.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    (doc.caseId && getCaseTitleById(doc.caseId).toLowerCase().includes(searchTerm.toLowerCase()))
  )

  const openUploadModal = () => {
    setSelectedDocument(null)
    setFormData({
      title: '',
      caseId: '',
      clientId: '',
      file: null
    })
    setIsUploadModalOpen(true)
  }

  const closeUploadModal = () => {
    setIsUploadModalOpen(false);
  }

  const openDeleteModal = (doc) => {
    setSelectedDocument(doc)
    setIsDeleteModalOpen(true)
  }

  const closeDeleteModal = () => {
    setIsDeleteModalOpen(false)
  }

  const handleInputChange = (e) => {
    setFormData({...formData,[e.target.name]:e.target.value})
  }

  const handleFileChange = (e) => {
    if(e.target.file && e.target.file[0])
    setFormData({...formData,file : e.target.file})
  }

  const handleUploadSubmit = () => {
    console.log('Uploading document', formData)
    alert('Document uploaded successfully')
    closeUploadModal()
  }

  const handleDeleteDocument = () => {
    if (selectedDocument) {
      console.log('Dleting Document',selectedDocument)
      alert(`Document ${selectedDocument.title} deleted successfully!`)
    }
    closeDeleteModal()
  }

  const handleDownload = (doc) =>{
     console.log('Downloading document:', doc)
    alert('Document download started!')
  }


  return (
    <div>
      <div className="mb-8">
        <h1 className="text-3xl font-serif font-bold text-primary-800 mb-2">Documents</h1>
        <p className="text-gray-600">Manage and organize case-related documents</p>
      </div>

            <Card className="mb-8">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <div className="flex-1">
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Search size={18} className="text-gray-400" />
              </div>
              <Input
                type="text"
                placeholder="Search documents..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
                fullWidth
              />
            </div>
          </div>
          <Button 
            variant="primary"
            className="flex items-center justify-center"
            onClick={openUploadModal}
          >
            <Plus size={18} className="mr-1" /> Upload Document
          </Button>
        </div>
      </Card>

      <Card>
        <Table headers={['Document', 'Related Case', 'Uploaded By', 'Date', 'Size', 'Actions']}>
          {filteredDocuments.map(doc => (
            <TableRow key={doc.caseId}>
              <TableCell>
                <div className="flex items-center">
                  <div className="w-10 h-10 flex-shrink-0 mr-3 bg-primary-100 rounded-full flex items-center justify-center">
                    <FileText size={24} className="text-primary-600" />
                  </div>
                  <div>
                    <div className="font-medium text-primary-800">{doc.title}</div>
                    <div className="text-xs text-gray-500">{doc.fileType}</div>
                  </div>
                </div>
              </TableCell>

              <TableCell>
                <div className="text-sm">
                  {doc.caseId ? getCaseTitleById(doc.caseId) : 'N/A'}
                </div>
              </TableCell>

              <TableCell>
                <div className="text-sm">{getLawyerNameById(doc.uploadedBy)}</div>
              </TableCell>

               <TableCell>
                <div className="text-sm">{formatDate(doc.uploadDate)}</div>
              </TableCell>

              <TableCell>
                <div className="text-sm">{doc.fileSize}</div>
              </TableCell>

               <TableCell>
                <div className="flex items-center space-x-2">
                  <button
                    onClick={() => handleDownload(doc)}
                    className="text-primary-600 hover:text-primary-800"
                    aria-label="Download document"
                  >
                    <Download size={18} />
                  </button>
                  <button
                    onClick={() => openDeleteModal(doc)}
                    className="text-error-500 hover:text-error-700"
                    aria-label="Delete document"
                  >
                    <Trash2 size={18} />
                  </button>
                </div>
              </TableCell>
            </TableRow>
          ))}
        </Table>
      </Card>

      <Modal
      isOpen={isUploadModalOpen}
      OnClose={closeUploadModal}
      title='Upload Document'
      footer={
        <>
          <Button variant='outline' onClick={closeUploadModal}>Cancle</Button>
          <Button variant='primary' type='submit' form='upload-form'>Upload</Button>
        </>
      }
      >
        <form id="upload-form" onSubmit={handleUploadSubmit} className="space-y-4">
          <Input
            label="Document Title"
            name="title"
            type="text"
            value={formData.title}
            onChange={handleInputChange}
            placeholder="Enter document title"
            required
            fullWidth
          />
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Upload File
            </label>
            <div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md">
              <div className="space-y-1 text-center">
                <FileText size={48} className="mx-auto text-gray-400" />
                <div className="flex text-sm text-gray-600">
                  <label
                    htmlFor="file-upload"
                    className="relative cursor-pointer bg-white rounded-md font-medium text-primary-600 hover:text-primary-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-primary-500"
                  >
                    <span>Upload a file</span>
                    <input
                      id="file-upload"
                      name="file"
                      type="file"
                      className="sr-only"
                      onChange={handleFileChange}
                      required
                    />
                  </label>
                  <p className="pl-1">or drag and drop</p>
                </div>
                <p className="text-xs text-gray-500">
                  PDF, DOC, DOCX up to 10MB
                </p>
              </div>
            </div>
          </div>
          <Select
            label="Related Case"
            name="caseId"
            value={formData.caseId}
            onChange={handleInputChange}
            options={[
              { value: '', label: 'Select a case' },
              ...documents.map(doc => ({
                value: doc.id,
                label: doc.title
              }))
            ]}
            fullWidth
          />
        </form>
      </Modal>

      <Modal
        isOpen={isDeleteModalOpen}
        onClose={closeDeleteModal}
        title="Confirm Deletion"
        footer={
          <>
            <Button variant="outline" onClick={closeDeleteModal}>
              Cancel
            </Button>
            <Button variant="primary" className="bg-error-500 hover:bg-error-600" onClick={handleDeleteDocument}>
              Delete Document
            </Button>
          </>
        }
      >
        <p>
          Are you sure you want to delete the document "{selectedDocument?.title}"? This action cannot be undone.
        </p>
      </Modal>

    </div>
  )
}

export default DocumentsPage
