import { Link } from "react-router-dom";
import { tickets } from "../data";

function TicketsList() {
  return (
    <div className="tickets">
      {tickets.map((ticket) => (
        // trainees: make these clickable and navigate to the ticket detail
        <Link to={`/tickets/${ticket.id}`} key={ticket.id} className="ticket-card">
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
