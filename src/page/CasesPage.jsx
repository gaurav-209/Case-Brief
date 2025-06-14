import React, { useState } from 'react'
import { Search, Plus, Edit, Trash2, FileText } from 'lucide-react'
import Button from '../components/ui/Button'
import Card from '../components/ui/Card'
import Input from '../components/ui/Input'
import Select from '../components/ui/Select'
import Table, { TableRow, TableCell } from '../components/ui/Table'
import Modal from '../components/ui/Modal'
import { cases, lawyers, getClientNameById, getLawyerNameById, formatDate } from '../data/mockData'


const CasesPage = () => {
  const [searchTerm, setSearchTerm] = useState('')
  const [filterStatus, setFilterStatus] = useState('all')
  const [isAddCaseModalOpen, setIsAddCaseModalOpen] = useState(false)
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false)
  const [selectedCase, setSelectedCase] = useState(null)
  const [formData, setFormData] = useState({
    title: '',
    type: '',
    description: '',
    clientId: '',
    assignedLawyer: '',
    courtDate: '',
    status: 'Open'
  })

  const filteredCases = cases.filter(caseItem => {
    const matchesSearch = caseItem.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      getClientNameById(caseItem.clientId).toLowerCase().includes(searchTerm.toLowerCase())

    const matchesStatus = filterStatus === 'all' || caseItem.status === filterStatus

    return matchesSearch && matchesStatus
  })

  const openAddCaseModal = () => {
    setSelectedCase(null)
    setFormData({
      title: '',
      type: '',
      description: '',
      clientId: '',
      assignedLawyer: '',
      courtDate: '',
      status: 'Open'
    })
    setIsAddCaseModalOpen(true)
  }

  const openEditCaseModal = (caseItem) => {
    setSelectedCase(caseItem)
    setFormData({
      title: caseItem.title,
      type: caseItem.type,
      description: caseItem.description,
      clientId: caseItem.clientId,
      assignedLawyer: caseItem.assignedLawyer,
      courtDate: caseItem.courtDate ? caseItem.courtDate.toISOString().split('T')[0] : '',
      status: caseItem.status
    })

    setIsAddCaseModalOpen(true)
  }

  const closeAddCaseModal = () => {
    setIsAddCaseModalOpen(false)
  }

  const openDeleteModal = (caseItem) => {
    setSelectedCase(caseItem)
    setIsDeleteModalOpen(true)
  }

  const closeDeleteModal = () => {
    setIsDeleteModalOpen(false)
  }

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleCaseSubmit = (selectedCase) => {
    if (selectedCase) {
      console.log('Editing Case', { ...selectedCase, ...formData })
      alert(`Case ${formData.title} updated successfully!`)
    } else {
      console.log('Adding new case :', formData)
      alert(`Case ${formData.title} added successfully!`)
    }

    closeAddCaseModal()
  }

  const handleDeleteCase = () => {
    if (selectedCase) {
      console.log('Dleting Case :', selectedCase)
      alert(`Case ${selectedCase.title} deleted successfully!`)
    }
  }
  return (
    <div>
      <div className="mb-8">
        <h1 className="text-3xl font-serif font-bold text-primary-800 mb-2">Cases</h1>
        <p className="text-gray-600">Manage your firm's legal cases and proceedings</p>
      </div>

      <Card className='mb-8'>
        <div className='flex flex-col md:flex-row md:items-center md:justify-between gap-4'>
          <div className='flex-1'>
            <div className='relative'>
              <div className='absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none'>
                <Search size={18} className='text-gray-400' />
              </div>
              <Input
                type='text'
                placeholder='Search cases...'
                value={searchTerm}
                onChange={(e) => searchTerm(e.target.value)}
                className='pl-10'
                fullWidth
              />
            </div>
          </div>
          <div className='flex flex-col sm:flex-row gap-4'>
            <Select
              options={[
                { value: 'all', label: 'All Cases' },
                { value: 'Open', label: 'Open' },
                { value: 'In Progress', label: 'In Progress' },
                { value: 'Closed', label: 'Closed' }
              ]}
              value={filterStatus}
              onChange={(e) => setFilterStatus(e.target.value)}
              className="w-40"
            />
            <Button
              variant="primary"
              className="flex items-center justify-center"
              onClick={openAddCaseModal}
            >
              <Plus size={18} className="mr-1" /> Add Case
            </Button>
          </div>
        </div>
      </Card>

      <Card>
        <Table headers={['Case', 'Client', 'Status', 'Court Date', 'Assigned To', 'Actions']}>
          {filteredCases.map((caseItem) => (
            <TableRow key={caseItem.id}>
              <TableCell>
                <div className='flex items-center'>
                  <div className='w-10 h-10 flex-shrink-0 mr-3 bg-primary-100 rounded-full flex items-center justify-center'>
                    <FileText size={24} className='text-primary-600' />
                  </div>
                  <div>
                    <div className='font-medium text-primary-800'> {caseItem.title}</div>
                    <div className=' text-xs text-gray-500'>{caseItem.type}</div>
                  </div>
                </div>
              </TableCell>
              <TableCell>
                <div className='text-sm font-medium'>{getClientNameById(caseItem.clientId)}</div>
              </TableCell>
              <TableCell>
                <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${caseItem.status === 'Open' ? 'bg-blue-100 text-blue-800' :
                    caseItem.status === 'In Progress' ? 'bg-yellow-100 text-yellow-800' :
                      'bg-green-100 text-green-800'
                  }`}>
                  {caseItem.status}
                </span>
              </TableCell>
              <TableCell>
                <div className='text-sm'>
                  {caseItem.courtDate ? formatDate(caseItem.courtDate) : 'Not Schedule'}
                </div>
              </TableCell>
              <TableCell>
                <div className="text-sm font-medium">{getLawyerNameById(caseItem.assignedLawyer)}</div>
              </TableCell>
              <TableCell>
                <div className="flex items-center space-x-2">
                  <Button
                    variant="text"
                    size="sm"
                    onClick={() => openEditCaseModal(caseItem)}
                    className="text-primary-600"
                  >
                    View Details
                  </Button>
                  <button
                    onClick={() => openEditCaseModal(caseItem)}
                    className="text-primary-600 hover:text-primary-800"
                    aria-label="Edit case"
                  >
                    <Edit size={18} />
                  </button>
                  <button
                    onClick={() => openDeleteModal(caseItem)}
                    className="text-error-500 hover:text-error-700"
                    aria-label="Delete case"
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
        isOpen={isAddCaseModalOpen}
        OnClose={closeAddCaseModal}
        title={selectedCase ? 'Edit Case' : 'Add New Case'}
        footer={
          <>
            <Button variant='outline' onClick={closeAddCaseModal}>
              Cancel
            </Button>
            <Button variant='primary' type='submit' form='case-form'>
              {selectedCase ? "Update Case" : "Add Case"}
            </Button>
          </>
        }>
        <form id='case-form' onSubmit={handleCaseSubmit} className='space-y-4'>
          <Input
            label={'Case Title'}
            name='title'
            type='text'
            value={formData.title}
            onChange={handleInputChange}
            placeholder='Enter case title'
            required
            fullWidth
          />
          <Input
            label="Case Type"
            name="type"
            type="text"
            value={formData.type}
            onChange={handleInputChange}
            placeholder="Enter case type"
            required
            fullWidth
          />
          <Select
            label='Status'
            name='status'
            value={formData.status}
            onChange={handleInputChange}
            options={[
              { value: 'Open', label: 'Open' },
              { value: 'In Progress', label: 'In Progress' },
              { value: 'Closed', label: 'Closed' }
            ]}
            required
            fullWidth
          />
          <Select
            label="Assigned Lawyer"
            name="assignedLawyer"
            value={formData.assignedLawyer}
            onChange={handleInputChange}
            options={lawyers.map(lawyer => ({
              value: lawyer.id,
              label: lawyer.name
            }))}
            required
            fullWidth
          />
          <Input
            label="Court Date"
            name="courtDate"
            type="date"
            value={formData.courtDate}
            onChange={handleInputChange}
            fullWidth
          />
          <div>
            <label htmlFor='description' className='block text-sm font-medium text-gray-700 mb-1'>
              Description
            </label>
            <textarea
              id='description'
              name='description'
              rows={3}
              value={formData.description}
              onChange={handleInputChange}
              placeholder='Enter case description'
              className='w-full rounded-md shadow-sm border border-gray-300 py-2 px-3 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500'
              required
            />
          </div>
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
            <Button variant="primary" className="bg-error-500 hover:bg-error-600" onClick={handleDeleteCase}>
              Delete Case
            </Button>
          </>
        }
      >
        <p>
          Are you sure you want to delete the case "{selectedCase?.title}"? This action cannot be undone.
        </p>
      </Modal>

    </div>
  )
}

export default CasesPage
