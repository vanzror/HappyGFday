# 🔐 GitHub Authentication Setup

## ❌ Error yang Terjadi:
```
remote: Permission to vanzror/HappyGFday.git denied to vxnzrxr.
fatal: unable to access 'https://github.com/vanzror/HappyGFday.git/': The requested URL returned error: 403
```

## 🔧 Solusi:

### **1. Setup Personal Access Token (Recommended)**
1. Buka [GitHub.com](https://github.com) → Settings → Developer settings
2. Personal access tokens → Tokens (classic) → Generate new token
3. Pilih scope: `repo` (full control of private repositories)
4. Copy token yang dihasilkan

**Push dengan token:**
```bash
git push https://ghp_YOUR_TOKEN@github.com/vanzror/HappyGFday.git main
```

### **2. Setup SSH Key (Alternative)**
```bash
# Generate SSH key
ssh-keygen -t ed25519 -C "vanzror@gmail.com"

# Add to SSH agent
eval "$(ssh-agent -s)"
ssh-add ~/.ssh/id_ed25519

# Copy public key dan tambahkan ke GitHub Settings → SSH Keys
cat ~/.ssh/id_ed25519.pub

# Change remote to SSH
git remote set-url origin git@github.com:vanzror/HappyGFday.git
git push origin main
```

### **3. Manual Upload (Quick Fix)**
1. Download sebagai ZIP: `zip -r HappyGFday.zip . -x "node_modules/*" ".git/*"`
2. Upload manual ke GitHub repository

## ✅ Setelah Berhasil Push:
- Buka GitHub repository
- Settings → Pages → Source: Deploy from branch
- Branch: `main`, Folder: `/` atau `/dist`
- Website live di: `https://vanzror.github.io/HappyGFday`
