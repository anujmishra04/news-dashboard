# News Dashboard

A responsive React-based dashboard for managing and analyzing news articles with user authentication, admin features, and analytics.

## ⚠️ Important: You Need Your Own News API Key

**Each user must get their own API key - API keys cannot be shared!**

### How to Get Your Free API Key:

1. Go to [News API](https://newsapi.org/)
2. Click "Get API Key" and sign up for a free account
3. After registration, you'll receive your personal API key
4. Create a `.env.local` file in the project root and add:
   ```
   REACT_APP_NEWS_API_KEY=your_personal_api_key_here
   ```

### Why You Need Your Own API Key:
- API keys are personal and tied to your account
- The free tier has a limit of 100 requests per day
- Sharing API keys violates News API's terms of service
- Each user needs their own key for proper usage tracking

### Free Tier Limitations:
- 100 requests per day
- Only works on localhost
- Limited to headlines and top news

## Features

- 🔐 **User Authentication**
  - Email/password login system
  - Role-based access (Admin/Regular User)
  - Protected routes

- 📰 **News Integration**
  - Real-time news fetching from News API
  - Article display with images, titles, and descriptions
  - Author and publication date information

- 🔍 **Advanced Filtering**
  - Search by keywords
  - Filter by author
  - Filter by date range
  - Filter by category

- 💰 **Payout Management** (Admin Only)
  - Set payout rates per article
  - Automatic payout calculations
  - Payout history tracking

- 📊 **Analytics Dashboard** (Admin Only)
  - Articles by source visualization
  - Articles by date trends
  - Payout distribution charts

- 📤 **Export Functionality** (Admin Only)
  - Export to PDF
  - Export to CSV
  - Google Sheets integration

## Demo Credentials

### Admin Access
- Email: admin@example.com
- Password: admin123
*(Any email containing "admin" will work)*

### Regular User Access
- Email: user@example.com
- Password: password123
*(Any email not containing "admin" will work)*

## Getting Started

### Prerequisites
- Node.js (v14 or higher)
- npm (v6 or higher)
- News API key (required - see above)

### Installation

1. Clone the repository:
```bash
git clone https://github.com/anujmishra04/news-dashboard.git
cd news-dashboard
```

2. Install dependencies:
```bash
npm install
```

3. **Required:** Create a `.env.local` file in the root directory and add your News API key:
```
REACT_APP_NEWS_API_KEY=your_api_key_here
```
Without this API key, the news fetching functionality will not work!

4. Start the development server:
```bash
npm start
```

5. Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

## Tech Stack

- React.js
- Redux for state management
- Chart.js for analytics
- News API for news data
- CSS for styling

## Project Structure

```
news-dashboard/
├── src/
│   ├── components/
│   │   ├── Auth/
│   │   │   └── Login.jsx
│   │   └── Dashboard/
│   │       ├── AnalyticsChart.jsx
│   │       ├── ExportButtons.jsx
│   │       ├── Filters.jsx
│   │       ├── NewsList.jsx
│   │       └── PayoutCalculator.jsx
│   ├── pages/
│   │   ├── DashboardPage.jsx
│   │   └── LoginPage.jsx
│   ├── redux/
│   │   ├── reducers/
│   │   │   ├── authReducer.js
│   │   │   └── newsReducer.js
│   │   └── store.js
│   └── App.js
└── package.json
```

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Acknowledgments

- [News API](https://newsapi.org/) for providing the news data
- [Chart.js](https://www.chartjs.org/) for analytics visualization
- [React](https://reactjs.org/) for the frontend framework
