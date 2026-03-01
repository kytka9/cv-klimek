import { resolve } from 'path'
import { defineConfig } from 'vite'

export default defineConfig({
  base: '/cv-klimek/',
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        contact: resolve(__dirname, 'contact.html'),
        projects: resolve(__dirname, 'projects.html'),
        certificates: resolve(__dirname, 'certificates.html'),
        resume_sk: resolve(__dirname, 'resume_sk.html'), 
        
        
        main_en: resolve(__dirname, 'en/index.html'),
        contact_en: resolve(__dirname, 'en/contact.html'),
        projects_en: resolve(__dirname, 'en/projects.html'),
        certificates_en: resolve(__dirname, 'en/certificates.html'),
        resume_en: resolve(__dirname, 'en/resume_en.html'),
              
      },
    },
  },
})