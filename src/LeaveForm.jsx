import { useState } from 'react';
import { supabase } from './supabaseClient';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import emailjs from '@emailjs/browser';


export default function LeaveForm({ user }) {
  const [form, setForm] = useState({
    name:'',
    email:'',
    start_date: '',
    end_date: '',
    reason: '',
    department: '',
    office_location: '',
    date_employed: '',
    employee_id: '',
    resume_date: '',
    reliever_name: '',
    last_working_day: '',
    total_entitlement: ''
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const { data, error } = await supabase.from('leave_requests').insert([
      {
        user_id: user.id,
        start_date: form.start_date,
        end_date: form.end_date,
        reason: form.reason,
        department: form.department,
        office_location: form.office_location,
        date_employed: form.date_employed,
        employee_id: form.employee_id,
        resume_date: form.resume_date,
        reliever_name: form.reliever_name,
        last_working_day: form.last_working_day,
        total_entitlement: form.total_entitlement,
        status: 'pending',
        name: form.name,
        email:form.email,
      }
    ]);
    console.log(data)

    if (error) {
      toast.error('Failed to submit: ' + error.message);
    } else {
      toast.success('Leave request submitted!');
      setForm({
        name:'',
        email:'',
        start_date: '',
        end_date: '',
        reason: '',
        department: '',
        office_location: '',
        date_employed: '',
        employee_id: '',
        resume_date: '',
        reliever_name: '',
        last_working_day: '',
        total_entitlement: ''
      });
    }

    emailjs.send(
        'service_r9dh2rv',         // Replace with actual Service ID
        'template_ijyr8xk', // New template ID you just created
        {
          name: form.name,
          email: form.email,
          department: form.department,
          start_date: form.start_date,
          end_date: form.end_date,
          reason: form.reason
        },
        'tUEnM5jWC3FPhXbtw'          // EmailJS public key
      ).then(
        (result) => {
          toast.success('HR notified successfully:', result.text);
        },
        (error) => {
          toast.error('Error sending HR email:', error.text);
        }
      );


        };

  return (
    <form onSubmit={handleSubmit} className="max-w-lg mx-auto p-6 bg-white rounded-md shadow-md space-y-6">
      <h3 className="text-2xl font-semibold text-gray-800 mb-4 text-center">Leave Request Form</h3>

      <div>
        <label htmlFor="department" className="block text-gray-700 font-medium mb-1">Name:</label>
        <input
          id="department"
          type="text"
          name="name"
          value={form.name}
          onChange={handleChange}
          required
          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      <div>
        <label htmlFor="department" className="block text-gray-700 font-medium mb-1">Email:</label>
        <input
          id="email"
          type="email"
          name="email"
          value={form.email}
          onChange={handleChange}
          required
          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>


      <div>
        <label htmlFor="department" className="block text-gray-700 font-medium mb-1">Department:</label>
        <input
          id="department"
          type="text"
          name="department"
          value={form.department}
          onChange={handleChange}
          required
          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      <div>
        <label htmlFor="office_location" className="block text-gray-700 font-medium mb-1">Office Location:</label>
        <input
          id="office_location"
          type="text"
          name="office_location"
          value={form.office_location}
          onChange={handleChange}
          required
          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      <div>
        <label htmlFor="date_employed" className="block text-gray-700 font-medium mb-1">Date Employed:</label>
        <input
          id="date_employed"
          type="date"
          name="date_employed"
          value={form.date_employed}
          onChange={handleChange}
          required
          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      <div>
        <label htmlFor="employee_id" className="block text-gray-700 font-medium mb-1">Employee ID Number:</label>
        <input
          id="employee_id"
          type="text"
          name="employee_id"
          value={form.employee_id}
          onChange={handleChange}
          required
          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      <div>
        <label htmlFor="start_date" className="block text-gray-700 font-medium mb-1">Start Date:</label>
        <input
          id="start_date"
          type="date"
          name="start_date"
          value={form.start_date}
          onChange={handleChange}
          required
          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      <div>
        <label htmlFor="end_date" className="block text-gray-700 font-medium mb-1">End Date:</label>
        <input
          id="end_date"
          type="date"
          name="end_date"
          value={form.end_date}
          onChange={handleChange}
          required
          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      <div>
        <label htmlFor="reason" className="block text-gray-700 font-medium mb-1">Reason:</label>
        <select
          id="reason"
          name="reason"
          value={form.reason}
          onChange={handleChange}
          required
          className="w-full px-4 py-2 border border-gray-300 rounded-md bg-white focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          <option value="">Select a reason</option>
          <option value="Sick">Sick</option>
          <option value="Maternity">Maternity</option>
          <option value="Annual">Annual</option>
          <option value="Exam">Exam</option>
          <option value="Others">Others</option>
        </select>
      </div>

      <div>
        <label htmlFor="resume_date" className="block text-gray-700 font-medium mb-1">Date Due to Resume:</label>
        <input
          id="resume_date"
          type="date"
          name="resume_date"
          value={form.resume_date}
          onChange={handleChange}
          required
          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      <div>
        <label htmlFor="reliever_name" className="block text-gray-700 font-medium mb-1">Name of Proposed Reliever:</label>
        <input
          id="reliever_name"
          type="text"
          name="reliever_name"
          value={form.reliever_name}
          onChange={handleChange}
          required
          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      <div>
        <label htmlFor="last_working_day" className="block text-gray-700 font-medium mb-1">Last Working Day:</label>
        <input
          id="last_working_day"
          type="date"
          name="last_working_day"
          value={form.last_working_day}
          onChange={handleChange}
          required
          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      <div>
        <label htmlFor="total_entitlement" className="block text-gray-700 font-medium mb-1">Total Leave Entitlement:</label>
        <input
          id="total_entitlement"
          type="text"
          name="total_entitlement"
          value={form.total_entitlement}
          onChange={handleChange}
          required
          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      <button
        type="submit"
        className="w-full bg-blue-600 text-white font-semibold py-3 rounded-md hover:bg-blue-700 transition-colors"
      >
        Submit Leave Request
      </button>
       {/* <ToastContainer position='top-right' autoClose={3000} /> */}
    </form>
  );
}