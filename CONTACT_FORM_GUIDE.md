# 📋 Contact Form Submission Guide

## ✅ What's Working Now

Your contact form now has **TWO systems** to capture student inquiries:

### 1️⃣ **JSON File Storage** (Already Working!)
- ✅ Every form submission is automatically saved to `data/submissions.json`
- ✅ Works immediately - no setup required
- ✅ All data is stored on your server

### 2️⃣ **Email Notifications** (Optional - Requires Setup)
- 📧 Send instant email notifications to you when students submit the form
- 📧 Automatic confirmation emails to students
- 🆓 Free tier: 3,000 emails/month with Resend

---

## 📍 Editing Contact Details

Your contact information is in **`public/html-version/index.html`**

**Lines 254-275** - Update these with your real details:

```html
<!-- Address -->
<p>123 Tech Park, Innovation District<br>Hyderabad, Telangana 500081</p>

<!-- Phone Numbers -->
<p>+91 9876543210<br>+91 9876543211</p>

<!-- Email Addresses -->
<p>info@deshondevsol.com<br>admissions@deshondevsol.com</p>
```

---

## 👀 Viewing Submissions

### **Option A: Web Dashboard** (Recommended)
Visit: **`http://localhost:3000/api/view-submissions`**

You'll see a beautiful dashboard with:
- 📊 Total submission count
- 🎓 Course interest breakdown
- 📇 Student contact cards
- 🔄 Real-time refresh

### **Option B: JSON File**
Open: **`data/submissions.json`**

Raw data format:
```json
[
  {
    "name": "Priya Sharma",
    "email": "priya.sharma@example.com",
    "phone": "+91 9988776655",
    "course": "Data Science",
    "timestamp": "2025-11-05T15:10:07.744Z"
  }
]
```

---

## 📧 Setting Up Email Notifications (Optional)

If you want to receive email notifications:

### **Step 1: Get Free Resend API Key**

1. Sign up free at: https://resend.com/signup
2. Go to: https://resend.com/api-keys
3. Click **"Create API Key"**
4. Copy your API key (starts with `re_...`)

### **Step 2: Configure Environment Variables**

1. Create a file named **`.env.local`** in your project root
2. Add these two lines:

```env
RESEND_API_KEY=re_your_actual_api_key_here
ADMIN_EMAIL=your-email@example.com
```

Replace with your actual values!

### **Step 3: Restart Server**

The form will automatically start sending emails when configured.

---

## 🎯 How It Works

When a student submits the contact form:

1. ✅ **Data is saved** to `data/submissions.json` (always works)
2. 📧 **Email sent to you** with student details (if configured)
3. 📧 **Email sent to student** confirming we received their inquiry (if configured)
4. ✅ **Success message** shown to student

---

## 📊 Sample Data

I've created 2 test submissions for you to see how it looks:

1. **Test Student** - DevOps Track
2. **Priya Sharma** - Data Science Track

Visit `/api/view-submissions` to see them in the dashboard!

---

## 🔒 Data Security

- ✅ All submissions are stored locally on your server
- ✅ JSON file is inside your project (not publicly accessible)
- ✅ Only you can access `/api/view-submissions`
- ✅ Email credentials are stored securely in `.env.local`

---

## 💡 Tips

### Want to export submissions?
Just copy the `data/submissions.json` file - it's plain text!

### Want to clear all submissions?
Delete the `data/submissions.json` file (or edit it directly)

### Want to customize email templates?
Edit the HTML templates in `src/app/api/send-email/route.ts`

### Want to add more fields to the form?
1. Update the form in `public/html-version/index.html`
2. Update the submission handler in `public/html-version/script.js`
3. Update the API routes to accept new fields

---

## 🚀 Production Deployment

When you deploy your website to production:

1. **Submissions will continue to work** - they'll be saved to `data/submissions.json` on your production server
2. **Add your .env.local variables** to your hosting platform's environment variables
3. **Visit your-domain.com/api/view-submissions** to view submissions anywhere

---

## 📞 Quick Reference

| What | Where |
|------|-------|
| Edit contact info | `public/html-version/index.html` (lines 254-275) |
| View submissions | Visit `/api/view-submissions` in browser |
| Submissions data file | `data/submissions.json` |
| Email configuration | `.env.local` file |
| Form JavaScript | `public/html-version/script.js` |

---

## ✨ Need Help?

Everything is working! Try submitting a test form on your website to see it in action.

Your form submissions are being saved automatically! 🎉
