import { tickets } from "../data";
import { Link, useParams } from "react-router-dom";

function TicketDetail() {
  // trainees: get the ticket id from the URL instead of hardcoding it
  const { id } = useParams();
  const ticket = tickets.find((t) => t.id === id);

  if (!ticket) {
    return <div className="not-found-message">Ticket not found.</div>;
  }

  return (
    <div className="ticket-detail">
      <div className="ticket-detail-header">
        {/* trainees: add a back button that navigates to the tickets list */}
        <Link to="/tickets" className="back-button">Back to Ticket List</Link>
        <div>
          <h3>{ticket.subject}</h3>
          <div className="ticket-detail-meta">
            <span className={`badge badge-${ticket.status}`}>
              {ticket.status}
            </span>
            <span className={`priority priority-${ticket.priority}`}>
              {ticket.priority}
            </span>
            <span className="ticket-customer">👤 {ticket.customer}</span>
            <span className="ticket-date">📅 {ticket.createdAt}</span>
          </div>
        </div>
      </div>

      <div className="detail-tabs">
        <div className="detail-tab active">Details</div>
        <div className="detail-tab">Activity</div>
        {/* trainees: convert these to proper navigation with active styling */}
        <Link to='details' className="detail-tab active">Details</Link>
        <Link to='activity' className="detail-tab">Activity</Link>
      </div>

      <div className="detail-tab-content">
        <Outlet />
      </div>
    </div>
  );
}

export default TicketDetail;
