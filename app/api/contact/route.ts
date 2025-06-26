import { google } from 'googleapis';
import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const { email } = await request.json();

    if (!email) {
      return NextResponse.json({ error: 'Email is required' }, { status: 400 });
    }

    // TODO: Move these to your .env.local file for security
    const SPREADSHEET_ID = '12HQXbdjooOnahdXci5jMdt99iPavtdwCcYpi3YihtBQ';
    const SHEET_NAME = 'Preorder_Emails';

    const auth = new google.auth.GoogleAuth({
      credentials: {
        client_email: process.env.GOOGLE_SHEETS_CLIENT_EMAIL,
        private_key: process.env.GOOGLE_SHEETS_PRIVATE_KEY?.replace(/\\n/g, '\n'),
      },
      scopes: ['https://www.googleapis.com/auth/spreadsheets'],
    });

    const sheets = google.sheets({ version: 'v4', auth });

    const timestamp = new Date().toISOString();
    const row = [[email, timestamp]];

    await sheets.spreadsheets.values.append({
      spreadsheetId: SPREADSHEET_ID,
      range: SHEET_NAME,
      valueInputOption: 'USER_ENTERED',
      requestBody: {
        values: row,
      },
    });

    return NextResponse.json({ message: 'Success' }, { status: 200 });
  } catch (error) {
    console.error('Error writing to Google Sheet:', error);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
} 