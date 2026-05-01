import { Link, useSearchParams } from "react-router-dom";
import { tickets } from "../data";
import React from 'react'

function TicketsList() {
const [isFiltered, setIsFiltered] = React.useState(false);
const [search, setSearch] = useSearchParams();
const statusFilter = search.get('status');
const priorFilter = search.get('priority');

  return (
    <div className="tickets">
      <div className="filter-bar">
        <div className="filter-group">
          <h4>Status</h4>
          <div className="filter-buttons">
            <button 
              onClick={()=> {
                setIsFiltered(prev=> prev = true)
                return setSearch('?status=open')
              }}
              className={`filter-btn ${statusFilter === 'open' ? 'active' : ''}`}
            >
              Open
            </button>

            <button 
              onClick={()=> {
                setIsFiltered(prev=> prev = true)
                return setSearch('?status=in-progress')
              }}
              className={`filter-btn ${statusFilter === 'in-progress' ? 'active' : ''}`}
            >
              In-Progress
            </button>

            <button 
              onClick={()=> {
                setIsFiltered(prev=> prev = true)
                return setSearch('?status=closed')
              }}
              className={`filter-btn ${statusFilter === 'closed' ? 'active' : ''}`}
            >
              Closed
            </button>
          </div>
        </div>
        
        <div className="filter-group">
          <h4>Priority</h4>
          <div className="filter-buttons">
            <button 
              onClick={()=> {
                setIsFiltered(prev=> prev = true)
                return setSearch('?priority=high')
              }} 
              className={`filter-btn ${priorFilter === 'high' ? 'active' : ''}`}
            >
              High
            </button>

            <button 
              onClick={()=> {
                setIsFiltered(prev=> prev = true)
                return setSearch('?priority=medium')
              }} 
              className={`filter-btn ${priorFilter === 'medium' ? 'active' : ''}`}
            >
              Medium
            </button>

            <button 
              onClick={()=> {
                setIsFiltered(prev=> prev = true)
                return setSearch('?priority=low')
              }} 
              className={`filter-btn ${priorFilter === 'low' ? 'active' : ''}`}
            >
              Low
            </button>
          </div>
        </div>
        
        {isFiltered && (
          <button 
            onClick={()=>{
              setIsFiltered(prev=> prev = false)
              setSearch('')
              setStatusFilter('')
              setPriorFilter('')
            }}
            className="clear-filters-btn"
          >
            Clear Filters
          </button>
        )}
      </div>
      {tickets.filter(ticket=> statusFilter? ticket.status === statusFilter: true && priorFilter? ticket.priority === priorFilter: true).map((ticket) => (
        // trainees: make these clickable and navigate to the ticket detail
        <Link to={`${ticket.id}`} key={ticket.id} state={{search: search.toString(), status: statusFilter, priority: priorFilter}} className="ticket-card">
          <div className="ticket-card-header">
            <h3 className="ticket-subject">{ticket.subject}</h3>
            <span className={`badge badge-${ticket.status}`}>
              {ticket.status}
            </span>
          </div>
          <div className="ticket-card-meta">
            <span className="ticket-customer">👤 {ticket.customer}</span>
            <span className={`priority priority-${ticket.priority}`}>
              {ticket.priority}
            </span>
            <span className="ticket-date">📅 {ticket.createdAt}</span>
          </div>
          <p className="ticket-preview">
            {ticket.description.substring(0, 120)}...
          </p>
        </Link>
      ))}
    </div>
  );
}

export default TicketsList;
