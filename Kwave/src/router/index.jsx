import { createBrowserRouter } from 'react-router-dom'
import App from '../App'

import NotFoundPage from '../pages/NotFoundPage'
import MainLayout from '../layouts/learner/MainLayout'
import LearnerHomePage from '../pages/learner/LearnerHomePage'
import LearnerNews from '../pages/learner/LearnerNews'
import LearnerNewsDetails from '../pages/learner/LearnerNewsDetails'
import LearnerVideo from '../pages/learner/LearnerVideo'
import VideoLearning from '../pages/learner/LearnerVideoDetails'



// import CustomerArticlePage from '../pages/customer/CustomerArticlePage'

const router = createBrowserRouter([
  // auth route
  {
    path: '/',
    Component: App,
  },

  // {// admin router
  //   path: '/admin',
  //   Component: AdminLayout,
  //   // loader: adminLoader,
  //   errorElement: <NotFoundPage />,
  //   children: [
  //     { index: true, Component: AdminHomePage },
  //     { path: 'workers', Component: AdminWorkerPage },
  //     { path: 'worker/:id', Component: AdminWorkerEditPage },
  //     { path: 'customers', Component: AdminCustomerPage },
  //     { path: 'customers/:customerId', Component: AdminCustomerDetailPage },
  //     { path: 'transactions', Component: AdminTransactions },
  //     { path: 'revenue', Component: AdminRevenuePage },
  //     { path: 'reviews', Component: AdminReviewsPage },
  //     { path: 'reviews/:reviewId', Component:AdminReviewsDetailPage},
  //     { path: 'discounts', Component: AdminDiscountPage },
  //     { path: 'events', Component: AdminEventPage },
  //     { path: 'notifications', Component: AdminNotificationPage },
  //   ],
  // },
   {
    path: '/learner',
    children: [
      {
        path: '',
        Component: MainLayout,
        children: [
          { index: true, Component: LearnerHomePage },
          { path: 'news', Component: LearnerNews },
          { path: 'news/:id', Component: LearnerNewsDetails },
          { path: 'video', Component: LearnerVideo },
          { path: 'video/learn/:videoId', Component: VideoLearning },
        ],
      },
     
    ],
  },
 
  { // not found
    path: '/*',
    Component: NotFoundPage
  }
])

export default router