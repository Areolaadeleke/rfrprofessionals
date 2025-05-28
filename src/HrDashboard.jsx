// // import { useEffect, useState } from 'react';
// // import { supabase } from './supabaseClient';
// // import { toast } from 'react-toastify';
// // import emailjs from '@emailjs/browser';

// // export default function HrDashboard() {
// //   const [requests, setRequests] = useState([]);

// //   useEffect(() => {
// //     fetchRequests();
// //   }, []);


// // //   useEffect(() => {
// // //   supabase
// // //     .from('leave_requests')
// // //     .select('id')
// // //     .then(({ data, error }) => {
// // //       if (error) console.error(error);
// // //       else console.log('Test fetch leave_requests:', data);
// // //     });
// // // }, []);

// //   const fetchRequests = async () => {
// //     const { data, error } = await supabase
// //       .from('leave_requests')
// //       .select(`
// //         id,
// //         name,
// //         email,
// //         start_date,
// //         end_date,
// //         reason,
// //         status,
// //         profiles (
// //           role
// //         )
// //       `)
// //       .order('created_at', { ascending: false });

// //     if (error) {
// //       toast.error('Fetch error:', error.message);
// //     } else {
// //       setRequests(data);
// //     }


// //      if (error) {
// //     toast.error('Fetch error:', error.message);
// //   } else {
// //     console.log('Fetched requests:', data);
// //     setRequests(data);
// //   }
  
// //   };


// // //   const fetchRequests = async () => {
// // //   const { data, error } = await supabase
// // //     .from('leave_requests')
// // //     .select(`
// // //       id,
// // //       start_date,
// // //       end_date,
// // //       reason,
// // //       status,
// // //       profiles (
// // //         role
// // //       )
// // //     `)
// // //     .order('created_at', { ascending: false });

// // //   if (error) {
// // //     console.error('Fetch error:', error.message);
// // //   } else {
// // //     console.log('Fetched requests (with join):', data);
// // //     setRequests(data);
// // //   }
// // // };

// // ///////////////////////////////////////////////////////////////////////// EmailJs


// // const sendStatusEmail = async (request, newStatus) => {
// //   const emailData = {
// //     name: request.name,
// //     email: request.email,
// //     start_date: request.start_date,
// //     end_date: request.end_date,
// //     reason: request.reason,
// //     status: newStatus,
// //     role: request.profiles?.role || 'N/A',
// //     submission_date: new Date().toLocaleString(),
// //     status_color: newStatus === 'approved' ? 'green' : newStatus === 'rejected' ? 'red' : 'black'
// //   };

// //   try {
// //     await emailjs.send(
// //       'service_r9dh2rv',
// //       'template_58zbdea',
// //       emailData,
// //       'tUEnM5jWC3FPhXbtw'
// //     );
// //     toast.success('Email notification sent.');
// //   } catch (error) {
// //     console.error('EmailJS Error:', error);
// //     toast.error('Failed to send email notification.');
// //   }
// // };


// // ///////////////////////////////////////////////////////////////////////////////////////////////////////////


// //   // const updateStatus = async (id, newStatus) => {
// //   //   const { error } = await supabase
// //   //     .from('leave_requests')
// //   //     .update({ status: newStatus })
// //   //     .eq('id', id);

// //   //   if (error) {
// //   //     toast.error('Update error:', error.message);
// //   //   } else {
// //   //     fetchRequests(); // refresh the list after update
// //   //   }
// //   // };


// // const updateStatus = async (id, newStatus) => {
// //   const { data, error } = await supabase
// //     .from('leave_requests')
// //     .update({ status: newStatus })
// //     .eq('id', id)
// //     .select(`
// //       id,
// //       name,
// //       start_date,
// //       end_date,
// //       reason,
// //       status,
// //       profiles (
// //         email
// //       )
// //     `)
// //     .single();

// //   if (error) {
// //     toast.error('Update error: ' + error.message);
// //     return;
// //   }

// //   toast.success(`Request ${newStatus}!`);
// //   fetchRequests(); // Refresh UI
// //   sendStaffNotificationEmail(data); // ✅ Send email to staff
// // };


// // ////////////////////////////////////////////////////////////////////////////////////////////

// //   return (
// //     <div className="p-6">
// //   <h3 className="text-2xl font-bold mb-4">Leave Requests</h3>

// //   {requests.length === 0 && (
// //     <p className="text-gray-600">No leave requests found.</p>
// //   )}

// //   {requests.map((req) => (
// //     <div
// //       key={req.id}
// //       className="border border-gray-300 rounded-md p-4 mb-4 shadow-sm bg-white"
// //     >

// //       <p className="mb-2">
// //         <span className="font-semibold">Name:</span> {req.name}
// //       </p>

// //       <p className="mb-2">
// //         <span className="font-semibold">Name:</span> {req.email}
// //       </p>

// //       <p className="mb-2">
// //         <span className="font-semibold">From:</span> {req.start_date} to {req.end_date}
// //       </p>

// //       <p className="mb-2">
// //         <span className="font-semibold">Reason:</span> {req.reason}
// //       </p>

// //       <p className="mb-2">
// //         <span className="font-semibold">Status:</span> {req.status}
// //       </p>

// //       <p className="mb-4">
// //         <span className="font-semibold">User Role:</span> {req.profiles?.role || 'N/A'}
// //       </p>
      
// //       <div className="flex gap-3">
// //         <button
// //           onClick={() => updateStatus(req.id, 'approved')}
// //           className="bg-green-500 hover:bg-green-600 text-white py-1 px-4 rounded"
// //         >
// //           Approve
// //         </button>
// //         <button
// //           onClick={() => updateStatus(req.id, 'rejected')}
// //           className="bg-red-500 hover:bg-red-600 text-white py-1 px-4 rounded"
// //         >
// //           Reject
// //         </button>
// //       </div>
// //     </div>
// //   ))}
// // </div>

// //   );
// // }





// import { useEffect, useState } from 'react';
// import { supabase } from './supabaseClient';
// import { toast } from 'react-toastify';
// import emailjs from '@emailjs/browser';

// export default function HrDashboard() {
//   const [requests, setRequests] = useState([]);

//   useEffect(() => {
//     fetchRequests();
//   }, []);

//   const fetchRequests = async () => {
//     const { data, error } = await supabase
//       .from('leave_requests')
//       .select(`
//         id,
//         name,
//         email,
//         start_date,
//         end_date,
//         reason,
//         status,
//         profiles (
//           role,
//           email
//         )
//       `)
//       .order('created_at', { ascending: false });

//     if (error) {
//       toast.error('Fetch error: ' + error.message);
//     } else {
//       setRequests(data);
//       console.log('Fetched requests:', data);
//     }
//   };

//   // Send email to staff using your staff EmailJS template
// const sendEmailToStaff = async (request, newStatus) => {
//   if (!request.email) {
//     toast.error('Staff email is missing. Cannot send email.');
//     return;
//   }

//   const emailData = {
//     email: request.email,
//     name: request.name,
//     status: newStatus,
//     start_date: request.start_date,
//     end_date: request.end_date,
//     reason: request.reason,
//     role: request.profiles?.role || 'N/A',
//     submission_date: new Date().toLocaleString(),
//     status_color:
//       newStatus === 'approved' ? 'green' : newStatus === 'rejected' ? 'red' : 'black',
//   };

//   try {
//     await emailjs.send(
//       'service_r9dh2rv',
//       'template_dl2beu8',  // your actual staff template ID here
//       emailData,
//       'tUEnM5jWC3FPhXbtw'
//     );
//     toast.success('Staff notified via email.');
//   } catch (error) {
//     console.error('EmailJS staff email error:', error);
//     toast.error('Failed to send email to staff.');
//   }
// };


//   // Send email to HR using your HR EmailJS template
//   const sendEmailToHR = async (request, newStatus) => {
//     const emailData = {
//       to_email: 'rfrprofessional@gmail.com', // replace with actual HR email or keep hardcoded
//       name: request.name,
//       start_date: request.start_date,
//       end_date: request.end_date,
//       reason: request.reason,
//       status: newStatus,
//       role: request.profiles?.role || 'N/A',
//       submission_date: new Date().toLocaleString(),
//       status_color:
//         newStatus === 'approved'
//           ? 'green'
//           : newStatus === 'rejected'
//           ? 'red'
//           : 'black',
//     };

//     try {
//       await emailjs.send(
//         'service_r9dh2rv',     // your EmailJS service id
//         'template_58zbdea',      // replace with your HR EmailJS template id
//         emailData,
//         'tUEnM5jWC3FPhXbtw'   // your EmailJS public key
//       );
//       toast.success('HR notified via email.');
//     } catch (error) {
//       console.error('EmailJS HR email error:', error);
//       toast.error('Failed to send email to HR.');
//     }
//   };

// const updateStatus = async (id, newStatus) => {
//   console.log('Updating status for ID:', id);

//   if (!id) {
//     toast.error('Invalid request id.');
//     return;
//   }

//   // Step 1: Update status without select (to avoid 406 error)
//   const { error: updateError } = await supabase
//     .from('leave_requests')
//     .update({ status: newStatus })
//     .eq('id', id);

//   if (updateError) {
//     toast.error('Update error: ' + updateError.message);
//     return;
//   }

//   // Step 2: Fetch updated request with profiles join
//   const { data, error: fetchError } = await supabase
//     .from('leave_requests')
//     .select(`
//       id,
//       name,
//       email,
//       start_date,
//       end_date,
//       reason,
//       status,
//       profiles (
//         role,
//         email
//       )
//     `)
//     .eq('id', id)
//     .maybeSingle();

//   console.log('UpdateStatus data:', data);

//   if (fetchError) {
//     toast.error('Fetch error: ' + fetchError.message);
//     return;
//   }

//   if (!data) {
//     toast.error('No leave request found with the given ID.');
//     return;
//   }

//   toast.success(`Request ${newStatus}!`);
//   fetchRequests(); // Refresh UI

//   const staffEmail = data.email || data.profiles?.email;
//   if (staffEmail) {
//     sendEmailToStaff({ ...data, email: staffEmail }, newStatus);
//   } else {
//     console.warn('No staff email found. Skipping staff notification.');
//   }

//   sendEmailToHR(data, newStatus);
// };


//   return (
//     <div className="p-6">
//       <h3 className="text-2xl font-bold mb-4">Leave Requests</h3>

//       {requests.length === 0 && (
//         <p className="text-gray-600">No leave requests found.</p>
//       )}

//       {requests.map((req) => (
//         <div
//           key={req.id}
//           className="border border-gray-300 rounded-md p-4 mb-4 shadow-sm bg-white"
//         >
//           <p className="mb-2">
//             <span className="font-semibold">Name:</span> {req.name}
//           </p>

//           <p className="mb-2 text-16">
//             <span className="font-semibold">Email:</span> {req.email}
//           </p>

//           <p className="mb-2">
//             <span className="font-semibold">From:</span> {req.start_date} to {req.end_date}
//           </p>

//           <p className="mb-2">
//             <span className="font-semibold">Reason:</span> {req.reason}
//           </p>

//           <p className="mb-2">
//             <span className="font-semibold">Status:</span> {req.status}
//           </p>

//           <p className="mb-4">
//             <span className="font-semibold">User Role:</span> {req.profiles?.role || 'N/A'}
//           </p>

//           <div className="flex gap-3">
//             <button
//               onClick={() => updateStatus(req.id, 'approved')}
//               className="bg-green-500 hover:bg-green-600 text-white py-1 px-4 rounded"
//             >
//               Approve
//             </button>
//             <button
//               onClick={() => updateStatus(req.id, 'rejected')}
//               className="bg-red-500 hover:bg-red-600 text-white py-1 px-4 rounded"
//             >
//               Reject
//             </button>
//           </div>
//         </div>
//       ))}
//     </div>
//   );
// }



import { useEffect, useState } from 'react';
import { supabase } from './supabaseClient';
import { toast } from 'react-toastify';
import emailjs from '@emailjs/browser';
import Loader from './Loader';
import LeaveStatsChart from "./LeaveStatsChart";
import LeaveTimeline from "./LeaveTimeline";

export default function HrDashboard() {
  const [requests, setRequests] = useState([]);
  const [loading, setLoading] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [statusFilter, setStatusFilter] = useState('');
  const [roleFilter, setRoleFilter] = useState('');
  const [sortField, setSortField] = useState('created_at');
  const [sortOrder, setSortOrder] = useState('desc');
  const [page, setPage] = useState(1);
  const PAGE_SIZE = 5;
  const [selectedIds, setSelectedIds] = useState([]);
  const [expandedReasons, setExpandedReasons] = useState({});

  const fetchRequests = async () => {
    setLoading(true);
    const { data, error } = await supabase
      .from('leave_requests')
      .select(`
        id, name, email, start_date, end_date, reason, status,
        profiles (role, email), created_at
      `)
      .order(sortField, { ascending: sortOrder === 'asc' })
      .range((page - 1) * PAGE_SIZE, page * PAGE_SIZE - 1);
    setLoading(false);
    if (error) toast.error('Fetch error: ' + error.message);
    else setRequests(data);
  };

  useEffect(() => {
    fetchRequests();
  }, [page, sortField, sortOrder]);

  const filteredRequests = requests.filter(req => {
    const searchText = searchTerm.toLowerCase();
    return (
      (req.name?.toLowerCase().includes(searchText) || req.email?.toLowerCase().includes(searchText)) &&
      (!statusFilter || req.status === statusFilter) &&
      (!roleFilter || req.profiles?.role === roleFilter)
    );
  });

  const statusColors = {
    approved: 'text-green-600',
    rejected: 'text-red-600',
    pending: 'text-yellow-600',
  };

  const toggleReason = (id) => {
    setExpandedReasons(prev => ({ ...prev, [id]: !prev[id] }));
  };

  const toggleSelect = (id) => {
    setSelectedIds(prev => prev.includes(id) ? prev.filter(x => x !== id) : [...prev, id]);
  };

  const bulkUpdateStatus = async (newStatus) => {
    if (selectedIds.length === 0) return toast.info('No requests selected.');
    for (const id of selectedIds) {
      await updateStatus(id, newStatus, false);
    }
    toast.success(`Bulk updated ${selectedIds.length} to ${newStatus}.`);
    setSelectedIds([]);
    fetchRequests();
  };

  const handleSort = (field) => {
    if (field === sortField) setSortOrder(prev => prev === 'asc' ? 'desc' : 'asc');
    else {
      setSortField(field);
      setSortOrder('asc');
    }
  };

  const sendEmailToStaff = async (request, newStatus) => {
    if (!request.email) return toast.error('No email for staff.');
    const emailData = {
      email: request.email,
      name: request.name,
      status: newStatus,
      start_date: request.start_date,
      end_date: request.end_date,
      reason: request.reason,
      role: request.profiles?.role || 'N/A',
      submission_date: new Date().toLocaleString(),
      status_color: newStatus === 'approved' ? 'green' : newStatus === 'rejected' ? 'red' : 'black',
    };
    try {
      await emailjs.send('service_r9dh2rv', 'template_dl2beu8', emailData, 'tUEnM5jWC3FPhXbtw');
    } catch (error) {
      toast.error('Failed to send email');
    }
  };

  const updateStatus = async (id, newStatus, fetch = true) => {
    const request = requests.find(r => r.id === id);
    if (!request) return;

    const { error } = await supabase
      .from('leave_requests')
      .update({ status: newStatus })
      .eq('id', id);

    if (error) toast.error(error.message);
    else {
      await sendEmailToStaff(request, newStatus);
      toast.success(`Status updated to ${newStatus}`);
      if (fetch) fetchRequests();
    }
  };

  return (
    
    <div className="min-h-screen bg-gray-100 w-full flex flex-col">
      {/* Header */}
      <header className="bg-blue-700 text-white px-8 py-4 shadow-md w-full">
        <h1 className="text-3xl font-bold">HR Dashboard</h1>
      </header>

      {/* Main Content */}
      <main className="flex-grow p-8 space-y-8 overflow-auto w-full max-w-full">
        {/* Filters */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          <input
            type="text"
            placeholder="Search by name/email"
            className="px-4 py-3 border rounded shadow-sm w-full"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <select
            className="px-4 py-3 border rounded shadow-sm w-full"
            value={statusFilter}
            onChange={(e) => setStatusFilter(e.target.value)}
          >
            <option value="">All Statuses</option>
            <option value="approved">Approved</option>
            <option value="pending">Pending</option>
            <option value="rejected">Rejected</option>
          </select>
          <select
            className="px-4 py-3 border rounded shadow-sm w-full"
            value={roleFilter}
            onChange={(e) => setRoleFilter(e.target.value)}
          >
            <option value="">All Roles</option>
            <option value="staff">Staff</option>
            <option value="manager">Manager</option>
          </select>
          <div className="flex gap-4">
            <button
              className="bg-green-600 text-white px-6 py-3 rounded shadow hover:bg-green-700 disabled:bg-green-300"
              onClick={() => bulkUpdateStatus('approved')}
              disabled={selectedIds.length === 0}
            >
              Approve Selected
            </button>
            <button
              className="bg-red-600 text-white px-6 py-3 rounded shadow hover:bg-red-700 disabled:bg-red-300"
              onClick={() => bulkUpdateStatus('rejected')}
              disabled={selectedIds.length === 0}
            >
              Reject Selected
            </button>
          </div>
        </div>

        {/* Leave Stats & Timeline */}
       <div className="w-full px-4 sm:px-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-[1600px] mx-auto">
              <div className="w-full">
                <LeaveStatsChart requests={requests} />
              </div>
              <div className="w-full">
                <LeaveTimeline requests={requests} />
              </div>
            </div>
        </div>




        {/* Requests Table */}
       <div className="bg-white shadow-lg rounded-lg p-4 sm:p-6 w-full">
  {loading ? (
    <Loader />
  ) : filteredRequests.length === 0 ? (
    <p className="text-center text-gray-500 py-6">No requests found.</p>
  ) : (
    <>
    <div className="hidden sm:block overflow-x-auto">
      <table className="min-w-full text-sm border-collapse">
        <thead className="bg-gray-100">
          <tr>
            <th className="p-3"></th>
            {['name', 'email', 'start_date', 'end_date', 'status', 'created_at'].map((field) => (
              <th
                key={field}
                className="cursor-pointer px-4 py-3 text-left whitespace-nowrap"
                onClick={() => handleSort(field)}
              >
                {field.replace('_', ' ').toUpperCase()}
                {sortField === field && (sortOrder === 'asc' ? ' 🔼' : ' 🔽')}
              </th>
            ))}
            <th className="px-4 py-3 text-left">Reason</th>
            <th className="px-4 py-3 text-left">Role</th>
            <th className="px-4 py-3 text-left">Action</th>
          </tr>
        </thead>
        <tbody>
          {filteredRequests.map((req) => (
            <tr key={req.id} className="border-t hover:bg-gray-50">
              <td className="p-3">
                <input
                  type="checkbox"
                  checked={selectedIds.includes(req.id)}
                  onChange={() => toggleSelect(req.id)}
                  className="cursor-pointer"
                />
              </td>
              <td className="px-4 py-3">{req.name}</td>
              <td className="px-4 py-3">{req.email}</td>
              <td className="px-4 py-3">{req.start_date}</td>
              <td className="px-4 py-3">{req.end_date}</td>
              <td className={`px-4 py-3 font-semibold ${statusColors[req.status]}`}>{req.status}</td>
              <td className="px-4 py-3">{new Date(req.created_at).toLocaleString()}</td>
              <td className="px-4 py-3 max-w-xs break-words">
                {expandedReasons[req.id]
                  ? req.reason
                  : req.reason.length > 30
                  ? req.reason.slice(0, 30) + '...'
                  : req.reason}
                {req.reason.length > 30 && (
                  <button
                    onClick={() => toggleReason(req.id)}
                    className="text-blue-600 ml-2 text-xs underline"
                  >
                    See {expandedReasons[req.id] ? 'less' : 'more'}
                  </button>
                )}
              </td>
              <td className="px-4 py-3">{req.profiles?.role}</td>
              <td className="px-4 py-3 space-x-2 whitespace-nowrap">
                <button
                  onClick={() => updateStatus(req.id, 'approved')}
                  className="bg-green-600 text-white px-3 py-1 rounded hover:bg-green-700"
                >
                  Approve
                </button>
                <button
                  onClick={() => updateStatus(req.id, 'rejected')}
                  className="bg-red-600 text-white px-3 py-1 rounded hover:bg-red-700"
                >
                  Reject
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>

    {/* // MOBILE VIEW */}
    <div className="sm:hidden space-y-4">
      {filteredRequests.map((req) => (
        <div key={req.id} className="border p-4 rounded-md shadow-sm bg-gray-50">
          <div className="text-sm text-gray-700 font-semibold mb-1">{req.name}</div>
          <div className="text-xs text-gray-500 mb-1">{req.email}</div>
          <div className="text-xs mb-1">📅 {req.start_date} → {req.end_date}</div>
          <div className={`text-xs font-semibold mb-1 ${statusColors[req.status]}`}>{req.status}</div>
          <div className="text-xs text-gray-500 mb-1">
            {new Date(req.created_at).toLocaleString()}
          </div>
          <div className="text-xs mb-2">
            {expandedReasons[req.id]
              ? req.reason
              : req.reason.length > 30
              ? req.reason.slice(0, 30) + '...'
              : req.reason}
            {req.reason.length > 30 && (
              <button
                onClick={() => toggleReason(req.id)}
                className="text-blue-600 ml-1 underline"
              >
                See {expandedReasons[req.id] ? 'less' : 'more'}
              </button>
            )}
          </div>
          <div className="text-xs mb-2">👤 {req.profiles?.role}</div>
          <div className="flex gap-2">
            <button
              onClick={() => updateStatus(req.id, 'approved')}
              className="bg-green-600 text-white px-3 py-1 text-xs rounded hover:bg-green-700"
            >
              Approve
            </button>
            <button
              onClick={() => updateStatus(req.id, 'rejected')}
              className="bg-red-600 text-white px-3 py-1 text-xs rounded hover:bg-red-700"
            >
              Reject
            </button>
          </div>
        </div>
      ))}
    </div>
    </>
  )}
</div>


        {/* Pagination */}
        <div className="flex justify-center items-center mt-8 space-x-6 w-full">
          <button
            className="px-6 py-3 bg-gray-300 rounded hover:bg-gray-400 disabled:bg-gray-200"
            onClick={() => setPage(p => Math.max(p - 1, 1))}
            disabled={page === 1}
          >
            Previous
          </button>
          <span className="text-lg font-semibold">Page {page}</span>
          <button
            className="px-6 py-3 bg-gray-300 rounded hover:bg-gray-400 disabled:bg-gray-200"
            onClick={() => setPage(p => p + 1)}
            disabled={requests.length < PAGE_SIZE}
          >
            Next
          </button>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-gray-200 text-center py-4 text-gray-700 w-full">
        &copy; {new Date().getFullYear()} RFR Professionals. All rights reserved.
      </footer>
    </div>
  );
}

