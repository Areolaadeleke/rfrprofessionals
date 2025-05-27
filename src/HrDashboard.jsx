// import { useEffect, useState } from 'react';
// import { supabase } from './supabaseClient';
// import { toast } from 'react-toastify';
// import emailjs from '@emailjs/browser';

// export default function HrDashboard() {
//   const [requests, setRequests] = useState([]);

//   useEffect(() => {
//     fetchRequests();
//   }, []);


// //   useEffect(() => {
// //   supabase
// //     .from('leave_requests')
// //     .select('id')
// //     .then(({ data, error }) => {
// //       if (error) console.error(error);
// //       else console.log('Test fetch leave_requests:', data);
// //     });
// // }, []);

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
//           role
//         )
//       `)
//       .order('created_at', { ascending: false });

//     if (error) {
//       toast.error('Fetch error:', error.message);
//     } else {
//       setRequests(data);
//     }


//      if (error) {
//     toast.error('Fetch error:', error.message);
//   } else {
//     console.log('Fetched requests:', data);
//     setRequests(data);
//   }
  
//   };


// //   const fetchRequests = async () => {
// //   const { data, error } = await supabase
// //     .from('leave_requests')
// //     .select(`
// //       id,
// //       start_date,
// //       end_date,
// //       reason,
// //       status,
// //       profiles (
// //         role
// //       )
// //     `)
// //     .order('created_at', { ascending: false });

// //   if (error) {
// //     console.error('Fetch error:', error.message);
// //   } else {
// //     console.log('Fetched requests (with join):', data);
// //     setRequests(data);
// //   }
// // };

// ///////////////////////////////////////////////////////////////////////// EmailJs


// const sendStatusEmail = async (request, newStatus) => {
//   const emailData = {
//     name: request.name,
//     email: request.email,
//     start_date: request.start_date,
//     end_date: request.end_date,
//     reason: request.reason,
//     status: newStatus,
//     role: request.profiles?.role || 'N/A',
//     submission_date: new Date().toLocaleString(),
//     status_color: newStatus === 'approved' ? 'green' : newStatus === 'rejected' ? 'red' : 'black'
//   };

//   try {
//     await emailjs.send(
//       'service_r9dh2rv',
//       'template_58zbdea',
//       emailData,
//       'tUEnM5jWC3FPhXbtw'
//     );
//     toast.success('Email notification sent.');
//   } catch (error) {
//     console.error('EmailJS Error:', error);
//     toast.error('Failed to send email notification.');
//   }
// };


// ///////////////////////////////////////////////////////////////////////////////////////////////////////////


//   // const updateStatus = async (id, newStatus) => {
//   //   const { error } = await supabase
//   //     .from('leave_requests')
//   //     .update({ status: newStatus })
//   //     .eq('id', id);

//   //   if (error) {
//   //     toast.error('Update error:', error.message);
//   //   } else {
//   //     fetchRequests(); // refresh the list after update
//   //   }
//   // };


// const updateStatus = async (id, newStatus) => {
//   const { data, error } = await supabase
//     .from('leave_requests')
//     .update({ status: newStatus })
//     .eq('id', id)
//     .select(`
//       id,
//       name,
//       start_date,
//       end_date,
//       reason,
//       status,
//       profiles (
//         email
//       )
//     `)
//     .single();

//   if (error) {
//     toast.error('Update error: ' + error.message);
//     return;
//   }

//   toast.success(`Request ${newStatus}!`);
//   fetchRequests(); // Refresh UI
//   sendStaffNotificationEmail(data); // ✅ Send email to staff
// };


// ////////////////////////////////////////////////////////////////////////////////////////////

//   return (
//     <div className="p-6">
//   <h3 className="text-2xl font-bold mb-4">Leave Requests</h3>

//   {requests.length === 0 && (
//     <p className="text-gray-600">No leave requests found.</p>
//   )}

//   {requests.map((req) => (
//     <div
//       key={req.id}
//       className="border border-gray-300 rounded-md p-4 mb-4 shadow-sm bg-white"
//     >

//       <p className="mb-2">
//         <span className="font-semibold">Name:</span> {req.name}
//       </p>

//       <p className="mb-2">
//         <span className="font-semibold">Name:</span> {req.email}
//       </p>

//       <p className="mb-2">
//         <span className="font-semibold">From:</span> {req.start_date} to {req.end_date}
//       </p>

//       <p className="mb-2">
//         <span className="font-semibold">Reason:</span> {req.reason}
//       </p>

//       <p className="mb-2">
//         <span className="font-semibold">Status:</span> {req.status}
//       </p>

//       <p className="mb-4">
//         <span className="font-semibold">User Role:</span> {req.profiles?.role || 'N/A'}
//       </p>
      
//       <div className="flex gap-3">
//         <button
//           onClick={() => updateStatus(req.id, 'approved')}
//           className="bg-green-500 hover:bg-green-600 text-white py-1 px-4 rounded"
//         >
//           Approve
//         </button>
//         <button
//           onClick={() => updateStatus(req.id, 'rejected')}
//           className="bg-red-500 hover:bg-red-600 text-white py-1 px-4 rounded"
//         >
//           Reject
//         </button>
//       </div>
//     </div>
//   ))}
// </div>

//   );
// }





import { useEffect, useState } from 'react';
import { supabase } from './supabaseClient';
import { toast } from 'react-toastify';
import emailjs from '@emailjs/browser';

export default function HrDashboard() {
  const [requests, setRequests] = useState([]);

  useEffect(() => {
    fetchRequests();
  }, []);

  const fetchRequests = async () => {
    const { data, error } = await supabase
      .from('leave_requests')
      .select(`
        id,
        name,
        email,
        start_date,
        end_date,
        reason,
        status,
        profiles (
          role,
          email
        )
      `)
      .order('created_at', { ascending: false });

    if (error) {
      toast.error('Fetch error: ' + error.message);
    } else {
      setRequests(data);
      console.log('Fetched requests:', data);
    }
  };

  // Send email to staff using your staff EmailJS template
const sendEmailToStaff = async (request, newStatus) => {
  if (!request.email) {
    toast.error('Staff email is missing. Cannot send email.');
    return;
  }

  const emailData = {
    email: request.email,
    name: request.name,
    status: newStatus,
    start_date: request.start_date,
    end_date: request.end_date,
    reason: request.reason,
    role: request.profiles?.role || 'N/A',
    submission_date: new Date().toLocaleString(),
    status_color:
      newStatus === 'approved' ? 'green' : newStatus === 'rejected' ? 'red' : 'black',
  };

  try {
    await emailjs.send(
      'service_r9dh2rv',
      'template_dl2beu8',  // your actual staff template ID here
      emailData,
      'tUEnM5jWC3FPhXbtw'
    );
    toast.success('Staff notified via email.');
  } catch (error) {
    console.error('EmailJS staff email error:', error);
    toast.error('Failed to send email to staff.');
  }
};


  // Send email to HR using your HR EmailJS template
  const sendEmailToHR = async (request, newStatus) => {
    const emailData = {
      to_email: 'rfrprofessional@gmail.com', // replace with actual HR email or keep hardcoded
      name: request.name,
      start_date: request.start_date,
      end_date: request.end_date,
      reason: request.reason,
      status: newStatus,
      role: request.profiles?.role || 'N/A',
      submission_date: new Date().toLocaleString(),
      status_color:
        newStatus === 'approved'
          ? 'green'
          : newStatus === 'rejected'
          ? 'red'
          : 'black',
    };

    try {
      await emailjs.send(
        'service_r9dh2rv',     // your EmailJS service id
        'template_58zbdea',      // replace with your HR EmailJS template id
        emailData,
        'tUEnM5jWC3FPhXbtw'   // your EmailJS public key
      );
      toast.success('HR notified via email.');
    } catch (error) {
      console.error('EmailJS HR email error:', error);
      toast.error('Failed to send email to HR.');
    }
  };

const updateStatus = async (id, newStatus) => {
  console.log('Updating status for ID:', id);

  if (!id) {
    toast.error('Invalid request id.');
    return;
  }

  // Step 1: Update status without select (to avoid 406 error)
  const { error: updateError } = await supabase
    .from('leave_requests')
    .update({ status: newStatus })
    .eq('id', id);

  if (updateError) {
    toast.error('Update error: ' + updateError.message);
    return;
  }

  // Step 2: Fetch updated request with profiles join
  const { data, error: fetchError } = await supabase
    .from('leave_requests')
    .select(`
      id,
      name,
      email,
      start_date,
      end_date,
      reason,
      status,
      profiles (
        role,
        email
      )
    `)
    .eq('id', id)
    .maybeSingle();

  console.log('UpdateStatus data:', data);

  if (fetchError) {
    toast.error('Fetch error: ' + fetchError.message);
    return;
  }

  if (!data) {
    toast.error('No leave request found with the given ID.');
    return;
  }

  toast.success(`Request ${newStatus}!`);
  fetchRequests(); // Refresh UI

  const staffEmail = data.email || data.profiles?.email;
  if (staffEmail) {
    sendEmailToStaff({ ...data, email: staffEmail }, newStatus);
  } else {
    console.warn('No staff email found. Skipping staff notification.');
  }

  sendEmailToHR(data, newStatus);
};


  return (
    <div className="p-6">
      <h3 className="text-2xl font-bold mb-4">Leave Requests</h3>

      {requests.length === 0 && (
        <p className="text-gray-600">No leave requests found.</p>
      )}

      {requests.map((req) => (
        <div
          key={req.id}
          className="border border-gray-300 rounded-md p-4 mb-4 shadow-sm bg-white"
        >
          <p className="mb-2">
            <span className="font-semibold">Name:</span> {req.name}
          </p>

          <p className="mb-2">
            <span className="font-semibold">Email:</span> {req.email}
          </p>

          <p className="mb-2">
            <span className="font-semibold">From:</span> {req.start_date} to {req.end_date}
          </p>

          <p className="mb-2">
            <span className="font-semibold">Reason:</span> {req.reason}
          </p>

          <p className="mb-2">
            <span className="font-semibold">Status:</span> {req.status}
          </p>

          <p className="mb-4">
            <span className="font-semibold">User Role:</span> {req.profiles?.role || 'N/A'}
          </p>

          <div className="flex gap-3">
            <button
              onClick={() => updateStatus(req.id, 'approved')}
              className="bg-green-500 hover:bg-green-600 text-white py-1 px-4 rounded"
            >
              Approve
            </button>
            <button
              onClick={() => updateStatus(req.id, 'rejected')}
              className="bg-red-500 hover:bg-red-600 text-white py-1 px-4 rounded"
            >
              Reject
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}


