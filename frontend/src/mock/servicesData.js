export default [
  {
    serviceName: 'blog-backend',
    status: 'running',
    path: '/www/wwwroot/blogBackendServices',
    remark: 'backend for blog',
    category: 'Node.js'
  },
  {
    serviceName: 'blog-frontend',
    status: 'stopped',
    path: '/www/wwwroot/blogFrontendServices',
    remark: 'frontend for blog',
    category: 'Vue.js'
  },
  {
    serviceName: 'general-api',
    status: 'error',
    path: '/www/wwwroot/generalApiServices',
    remark: 'general api service',
    category: 'Node.js'
  },
  {
    serviceName: 'management-system',
    status: 'running',
    path: '/www/wwwroot/managementSystemService',
    remark: 'panel for manage blog',
    category: 'Node.js'
  }
]