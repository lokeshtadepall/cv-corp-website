import { NextRequest, NextResponse } from 'next/server';
import { readFile } from 'fs/promises';
import { existsSync } from 'fs';
import path from 'path';

interface ContactSubmission {
  name: string;
  email: string;
  phone: string;
  course: string;
  timestamp: string;
}

export async function GET(req: NextRequest) {
  try {
    const filePath = path.join(process.cwd(), 'data', 'submissions.json');

    if (!existsSync(filePath)) {
      return new NextResponse(
        generateHTML([]),
        { 
          status: 200,
          headers: { 'Content-Type': 'text/html' }
        }
      );
    }

    const fileContent = await readFile(filePath, 'utf-8');
    const submissions: ContactSubmission[] = JSON.parse(fileContent);

    // Sort by timestamp (newest first)
    submissions.sort((a, b) => new Date(b.timestamp).getTime() - new Date(a.timestamp).getTime());

    return new NextResponse(
      generateHTML(submissions),
      { 
        status: 200,
        headers: { 'Content-Type': 'text/html' }
      }
    );

  } catch (error) {
    console.error('View submissions error:', error);
    return new NextResponse(
      generateHTML([], 'Error loading submissions'),
      { 
        status: 500,
        headers: { 'Content-Type': 'text/html' }
      }
    );
  }
}

function generateHTML(submissions: ContactSubmission[], error?: string): string {
  const courseColors: Record<string, string> = {
    'DevOps': '#667eea',
    'Data Science': '#764ba2',
    'Both Tracks': '#f093fb'
  };

  return `
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Course Submissions - DESHON DEVSOL</title>
      <style>
        * { margin: 0; padding: 0; box-sizing: border-box; }
        body {
          font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          min-height: 100vh;
          padding: 20px;
        }
        .container {
          max-width: 1200px;
          margin: 0 auto;
        }
        .header {
          background: white;
          padding: 30px;
          border-radius: 15px;
          margin-bottom: 30px;
          box-shadow: 0 10px 40px rgba(0,0,0,0.1);
        }
        .header h1 {
          color: #667eea;
          font-size: 32px;
          margin-bottom: 10px;
        }
        .stats {
          display: flex;
          gap: 20px;
          margin-top: 20px;
          flex-wrap: wrap;
        }
        .stat-card {
          background: #f8f9fa;
          padding: 15px 25px;
          border-radius: 10px;
          flex: 1;
          min-width: 150px;
        }
        .stat-number {
          font-size: 28px;
          font-weight: bold;
          color: #667eea;
        }
        .stat-label {
          color: #666;
          font-size: 14px;
          margin-top: 5px;
        }
        .submissions-grid {
          display: grid;
          gap: 20px;
          grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
        }
        .submission-card {
          background: white;
          border-radius: 15px;
          padding: 25px;
          box-shadow: 0 5px 20px rgba(0,0,0,0.1);
          transition: transform 0.3s ease, box-shadow 0.3s ease;
          position: relative;
          overflow: hidden;
        }
        .submission-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 10px 30px rgba(0,0,0,0.15);
        }
        .course-badge {
          position: absolute;
          top: 15px;
          right: 15px;
          padding: 6px 12px;
          border-radius: 20px;
          font-size: 12px;
          font-weight: 600;
          color: white;
        }
        .info-row {
          margin: 12px 0;
          display: flex;
          align-items: start;
        }
        .info-label {
          font-size: 12px;
          color: #666;
          margin-bottom: 3px;
          font-weight: 600;
          min-width: 70px;
        }
        .info-value {
          color: #333;
          font-size: 14px;
          word-break: break-word;
        }
        .name-header {
          font-size: 20px;
          font-weight: bold;
          color: #667eea;
          margin-bottom: 15px;
          padding-bottom: 15px;
          border-bottom: 2px solid #f0f0f0;
        }
        .timestamp {
          font-size: 12px;
          color: #999;
          margin-top: 15px;
          padding-top: 15px;
          border-top: 1px solid #f0f0f0;
        }
        .empty-state {
          background: white;
          padding: 60px;
          border-radius: 15px;
          text-align: center;
          box-shadow: 0 5px 20px rgba(0,0,0,0.1);
        }
        .empty-state h2 {
          color: #667eea;
          font-size: 24px;
          margin-bottom: 10px;
        }
        .error-state {
          background: #ff4444;
          color: white;
          padding: 20px;
          border-radius: 15px;
          text-align: center;
          margin-bottom: 20px;
        }
        .refresh-btn {
          background: #667eea;
          color: white;
          border: none;
          padding: 12px 30px;
          border-radius: 8px;
          font-size: 16px;
          cursor: pointer;
          margin-top: 20px;
          transition: background 0.3s ease;
        }
        .refresh-btn:hover {
          background: #5568d3;
        }
        @media (max-width: 768px) {
          .submissions-grid {
            grid-template-columns: 1fr;
          }
          .header h1 {
            font-size: 24px;
          }
        }
      </style>
    </head>
    <body>
      <div class="container">
        <div class="header">
          <h1>🎓 DESHON DEVSOL - Course Inquiries</h1>
          <p style="color: #666; margin-top: 5px;">View all student submissions and enrollment requests</p>
          
          <div class="stats">
            <div class="stat-card">
              <div class="stat-number">${submissions.length}</div>
              <div class="stat-label">Total Submissions</div>
            </div>
            <div class="stat-card">
              <div class="stat-number">${submissions.filter(s => s.course === 'DevOps').length}</div>
              <div class="stat-label">DevOps Track</div>
            </div>
            <div class="stat-card">
              <div class="stat-number">${submissions.filter(s => s.course === 'Data Science').length}</div>
              <div class="stat-label">Data Science Track</div>
            </div>
            <div class="stat-card">
              <div class="stat-number">${submissions.filter(s => s.course === 'Both Tracks').length}</div>
              <div class="stat-label">Both Tracks</div>
            </div>
          </div>
          
          <button class="refresh-btn" onclick="window.location.reload()">🔄 Refresh Data</button>
        </div>
        
        ${error ? `<div class="error-state">⚠️ ${error}</div>` : ''}
        
        ${submissions.length === 0 ? `
          <div class="empty-state">
            <h2>📭 No Submissions Yet</h2>
            <p style="color: #666; margin-top: 10px;">Submissions will appear here when students fill out the contact form.</p>
          </div>
        ` : `
          <div class="submissions-grid">
            ${submissions.map(sub => `
              <div class="submission-card">
                <span class="course-badge" style="background: ${courseColors[sub.course] || '#667eea'}">
                  ${sub.course}
                </span>
                
                <div class="name-header">👤 ${sub.name}</div>
                
                <div class="info-row">
                  <div>
                    <div class="info-label">📧 EMAIL</div>
                    <div class="info-value"><a href="mailto:${sub.email}" style="color: #667eea; text-decoration: none;">${sub.email}</a></div>
                  </div>
                </div>
                
                <div class="info-row">
                  <div>
                    <div class="info-label">📱 PHONE</div>
                    <div class="info-value"><a href="tel:${sub.phone}" style="color: #667eea; text-decoration: none;">${sub.phone}</a></div>
                  </div>
                </div>
                
                <div class="timestamp">
                  🕐 ${new Date(sub.timestamp).toLocaleString('en-IN', { 
                    timeZone: 'Asia/Kolkata',
                    dateStyle: 'medium',
                    timeStyle: 'short'
                  })}
                </div>
              </div>
            `).join('')}
          </div>
        `}
      </div>
    </body>
    </html>
  `;
}
