import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Search, Plus, Edit, Trash2, UserCircle } from 'lucide-react'
import Button from '../components/ui/Button'
import Card from '../components/ui/Card'
import Input from '../components/ui/Input'
import Select from '../components/ui/Select'
import Table, { TableRow, TableCell } from '../components/ui/Table'
import Modal from '../components/ui/Modal'
import { clients } from '../data/mockData'

const ClientsPage = () => {
  const navigate = useNavigate()
  const [searchTerm, setSearchTerm] = useState('')
  const [filterStatus, setFilterStatus] = useState('all')
  const [isAddClientModalOpen, setIsAddClientModalOpen] = useState(false)
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false)
  const [selectedClient, setSelectedClient] = useState(null)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    address: '',
    notes: ''
  })

  const filteredClients = clients.filter(client => {
    const matchesSearch = client.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      client.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
      client.phone.includes(searchTerm)

    const matchesStatus = filterStatus === 'all' ||
      (filterStatus === 'active' && client.isActive) ||
      (filterStatus === 'inactive' && !client.isActive)

    return matchesSearch && matchesStatus
  })

  const openAddClientModal = () => {
    setSelectedClient(null)
    setFormData({
      name: '',
      email: '',
      phone: '',
      address: '',
      notes: ''
    })
    setIsAddClientModalOpen(true)
  }

  const openEditClientModal = (client) => {
    setSelectedClient(client)
    setFormData({
      name: client.name,
      email: client.email,
      phone: client.phone,
      address: client.address,
      notes: client.notes || ''
    })
    setIsAddClientModalOpen(true)
  }

  const closeAddClientModal = () => {
    setIsAddClientModalOpen(false)
  }

  const openDeleteModal = (client) => {
    setSelectedClient(client)
    setIsDeleteModalOpen(true)
  }

  const closeDeleteModal = () => {
    setIsDeleteModalOpen(false)
  }

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData({ ...formData, [name]: value })
  }

  const handleSubmit = () => {
    if (selectedClient) {
      console.log('Editing Client', { ...selectedClient, ...formData })
      alert(`Client ${formData.name} updated Successfully`)
    } else {
      console.log('Adding new Clients', formData)
      alert(`Client ${formData.name} added successfully`)
    }

    closeAddClientModal()
  }

  const handleDeleteClient = () => {
    if (selectedClient) {
      console.log('Deleting client:', selectedClient);
      alert(`Client ${selectedClient.name} deleted successfully!`);
    }
    closeDeleteModal()
  }

  const viewClientProfile = (clientId) => {
    navigate(`/clients/${clientId}`)
  }
  return (
    <div>
      <div className='mb-8'>
        <h1 className='text-3xl font-serif font-bold text-primary-800 mb-2'>Clients</h1>
        <p className="text-gray-600">Manage your firm's clients and their information</p>
      </div>

      <Card className='mb-8'>
        <div className='flex flex-col md:flex-row md:items-center md:justify-between gap-4'>
          <div className='flex-1'>
            <div className=' relative'>
              <div className=' absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none'>
                <Search size={18} className='text-gray-400' />
              </div>
              <Input
                type="text"
                placeholder="Search clients..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
                fullWidth
              />
            </div>
          </div>
          <div className='flex flex-col sm:flex-row gap-4'>
            <Select
              options={[
                { value: 'all', label: 'All Clients' },
                { value: 'active', label: 'Active' },
                { value: 'inactive', label: 'Inactive' }
              ]}
              value={filterStatus}
              onChange={(e) => { setFilterStatus(e.target.value) }}
              className='w-40'
            />
            <Button
              variant='primary'
              className='flex items-center justify-center'
              onClick={openAddClientModal}
            >
              <Plus size={18} className='mr-1' /> Add Client
            </Button>
          </div>
        </div>
      </Card>

      <Card>
        <Table headers={['Client', 'Contact Information', 'Status', 'Cases', 'Actions']}>
          {filteredClients.map((client) => (
            <TableRow key={client.id} className='gap-10'>
              <TableCell>
                <div className="flex items-center">
                  <div className="w-10 h-10 flex-shrink-0 mr-3 bg-primary-100 rounded-full flex items-center justify-center">
                    <UserCircle size={24} className="text-primary-600" />
                  </div>
                  <div>
                    <div className="font-medium text-primary-800">{client.name}</div>
                    <div className="text-xs text-gray-500">Added on {client.dateAdded.toLocaleDateString()}</div>
                  </div>
                </div>
              </TableCell>
              <TableCell>
                <div className="text-sm">
                  <div>{client.email}</div>
                  <div>{client.phone}</div>
                </div>
              </TableCell>
              <TableCell>
                <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${client.isActive
                    ? 'bg-green-100 text-green-800'
                    : 'bg-gray-100 text-gray-800'
                  }`}>
                  {client.isActive ? 'Active' : 'Inactive'}
                </span>
              </TableCell>
              <TableCell>
                <div className="text-sm font-medium">
                  {client.cases.length} {client.cases.length === 1 ? 'case' : 'cases'}
                </div>
              </TableCell>
              <TableCell>
                <div className="flex items-center space-x-2">
                  <Button
                    variant="text"
                    size="sm"
                    onClick={() => viewClientProfile(client.id)}
                    className="text-primary-600"
                  >
                    View Profile
                  </Button>
                  <button
                    onClick={() => openEditClientModal(client)}
                    className="text-primary-600 hover:text-primary-800"
                    aria-label="Edit client"
                  >
                    <Edit size={18} />
                  </button>
                  <button
                    onClick={() => openDeleteModal(client)}
                    className="text-error-500 hover:text-error-700"
                    aria-label="Delete client"
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
        isOpen={isAddClientModalOpen}
        OnClose={closeAddClientModal}
        title={selectedClient ? 'Edit Client' : 'Add New Client'}
        footer={
          <>
            <Button variant='outline' onClick={closeAddClientModal}>Cancle</Button>
            <Button variant='primary' type='submit' form='client-form' >
              {selectedClient ? 'Update Client' : 'Add Client'}
            </Button>
          </>
        }>
        <form id="client-form" onSubmit={handleSubmit} className="space-y-4">
          <Input
            label="Client Name"
            name="name"
            type="text"
            value={formData ? formData.name : ''}
            onChange={handleInputChange}
            placeholder="Enter client name"
            required
            fullWidth
          />
          <Input
            label="Email"
            name="email"
            type="email"
            value={formData.email}
            onChange={handleInputChange}
            placeholder="Enter email address"
            required
            fullWidth
          />
          <Input
            label="Phone Number"
            name="phone"
            type="tel"
            value={formData.phone}
            onChange={handleInputChange}
            placeholder="Enter phone number"
            required
            fullWidth
          />
          <Input
            label="Address"
            name="address"
            type="text"
            value={formData.address}
            onChange={handleInputChange}
            placeholder="Enter address"
            fullWidth
          />
          <div>
            <label htmlFor="notes" className="block text-sm font-medium text-gray-700 mb-1">
              Notes
            </label>
            <textarea
              id="notes"
              name="notes"
              rows={3}
              value={formData.notes}
              onChange={handleInputChange}
              placeholder="Additional notes about the client"
              className="w-full rounded-md shadow-sm border border-gray-300 py-2 px-3 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
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
            <Button variant="primary" className="bg-error-500 hover:bg-error-600" onClick={handleDeleteClient}>
              Delete Client
            </Button>
          </>
        }
      >
        <p>
          Are you sure you want to delete the client "{selectedClient?.name}"? This action cannot be undone.
        </p>
      </Modal>
    </div>
  )
}

export default ClientsPage
