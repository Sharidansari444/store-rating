# 📋 Deployment Checklist

## ✅ Pre-Deployment

- [ ] Run `npm run build` successfully
- [ ] Test locally with `npm run preview`
- [ ] Check console for any errors
- [ ] Verify responsive design works
- [ ] Ensure all files are committed to git

## 🏆 Netlify Deployment (Recommended)

### Files to Deploy:
- [ ] `dist/` folder (build output)
- [ ] `netlify/` folder (serverless functions)
- [ ] `netlify.toml` (configuration)

### Deployment Steps:
- [ ] Build project: `npm run build`
- [ ] Deploy via CLI: `npm run deploy:netlify`
- [ ] Or upload to netlify.com manually
- [ ] Verify function deployed in Functions tab
- [ ] Test live site for CORS errors

## 🌐 Other Platform Deployment

### Required Files:
- [ ] `dist/` folder only
- [ ] App auto-detects platform and uses appropriate CORS solution

### Platform-Specific:
- [ ] **Vercel**: `vercel --prod`
- [ ] **Firebase**: `firebase deploy`
- [ ] **GitHub Pages**: Set homepage in package.json first

## 🧪 Post-Deployment Testing

- [ ] Site loads without errors
- [ ] Reddit posts are fetched and displayed
- [ ] No CORS errors in browser console
- [ ] Mobile responsiveness works
- [ ] All interactive features function
- [ ] Loading states work properly
- [ ] Error handling works (test with network disabled)

## 🚨 Troubleshooting

If CORS errors occur:

1. **Check browser console** for specific error messages
2. **Verify which endpoint** is being used (look for "Fetching from:" log)
3. **For Netlify**: Ensure functions deployed correctly
4. **For other platforms**: Fallback proxies should work automatically
5. **Test CORS proxies**: Run `npm run test-cors`

## 📞 Support

If you encounter issues:
1. Check browser developer console
2. Verify network connectivity
3. Try refreshing the page
4. Check if Reddit API is accessible

---

**🎉 Success Criteria**: App loads, displays Reddit posts, no CORS errors, fully responsive!