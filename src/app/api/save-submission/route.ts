import { NextRequest, NextResponse } from 'next/server';
import { writeFile, readFile, mkdir } from 'fs/promises';
import { existsSync } from 'fs';
import path from 'path';

interface ContactSubmission {
  name: string;
  email: string;
  phone: string;
  course: string;
  timestamp: string;
}

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    
    // Validation
    if (!body.name || !body.email || !body.phone || !body.course) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(body.email)) {
      return NextResponse.json(
        { error: 'Invalid email format' },
        { status: 400 }
      );
    }

    // Create submission object
    const submission: ContactSubmission = {
      name: body.name,
      email: body.email,
      phone: body.phone,
      course: body.course,
      timestamp: new Date().toISOString()
    };

    // Define data directory path
    const dataDir = path.join(process.cwd(), 'data');
    const filePath = path.join(dataDir, 'submissions.json');

    // Create data directory if it doesn't exist
    if (!existsSync(dataDir)) {
      await mkdir(dataDir, { recursive: true });
    }

    // Read existing submissions or create new array
    let submissions: ContactSubmission[] = [];
    
    if (existsSync(filePath)) {
      const fileContent = await readFile(filePath, 'utf-8');
      submissions = JSON.parse(fileContent);
    }

    // Add new submission
    submissions.push(submission);

    // Write back to file
    await writeFile(filePath, JSON.stringify(submissions, null, 2), 'utf-8');

    return NextResponse.json(
      { 
        success: true, 
        message: 'Submission saved successfully',
        submissionCount: submissions.length
      },
      { status: 200 }
    );

  } catch (error) {
    console.error('Save submission error:', error);
    return NextResponse.json(
      { error: 'Failed to save submission' },
      { status: 500 }
    );
  }
}

// GET endpoint to retrieve all submissions
export async function GET() {
  try {
    const filePath = path.join(process.cwd(), 'data', 'submissions.json');

    if (!existsSync(filePath)) {
      return NextResponse.json({ submissions: [] }, { status: 200 });
    }

    const fileContent = await readFile(filePath, 'utf-8');
    const submissions = JSON.parse(fileContent);

    return NextResponse.json(
      { 
        submissions,
        count: submissions.length 
      },
      { status: 200 }
    );

  } catch (error) {
    console.error('Get submissions error:', error);
    return NextResponse.json(
      { error: 'Failed to retrieve submissions' },
      { status: 500 }
    );
  }
}
