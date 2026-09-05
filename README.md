<img width="1517" height="858" alt="WhatsApp Image 2026-09-04 at 12 22 07 PM" src="https://github.com/user-attachments/assets/8599d8df-37af-481b-900e-0a029999cdf7" /># Node.js Assignment Deployment

This repository contains a containerized Node.js application deployed using Docker and Docker Hub.

## How to Run Locally

1. **Pull the image from Docker Hub:**
   ```bash
   docker pull lambertyno/nodejs-app:1.0
   ```

2. **Run the Docker container:**
   ```bash
   docker run -d --name lambert-node-app -p 3000:3000 lambertyno/nodejs-app:1.0
   ```

3. **Access the application:**
   Open your browser and navigate to `http://localhost:3000`

---

## Deployment Verification Screenshots

### 1. Docker Build Command
![Docker Build Command](screenshots/build.png)
<img width="710" height="273" alt="WhatsApp Image 2026-09-04 at 12 49 06 PM" src="https://github.com/user-attachments/assets/65afb2dd-f0a5-4559-b447-7b1b230a0a21" />

### 2. Docker Hub Image
![Docker Hub Image](screenshots/dockerhub.png)
<img width="815" height="408" alt="image" src="https://github.com/user-attachments/assets/7510cef5-240a-4c4b-b51c-854c3b96a493" />

### 3. Running Docker Container
![Running Docker Container](screenshots/container.png)
<img width="1600" height="232" alt="WhatsApp Image 2026-09-04 at 5 19 17 PM" src="https://github.com/user-attachments/assets/0db4474c-4e4c-4edc-854f-60d1186214d3" />

### 4. Live Application
![Live Application](screenshots/live_app.png)
<img width="805" height="435" alt="image" src="https://github.com/user-attachments/assets/623ea60f-fce1-4f51-aea4-b7f30d99782c" />


