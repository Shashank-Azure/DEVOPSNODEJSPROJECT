# Modern React Application with Azure DevOps Pipeline

A production-ready React application with TypeScript, Tailwind CSS, and a complete CI/CD pipeline using Azure DevOps.

## 🚀 Features

- **Frontend Technologies**
  - React 18 with TypeScript
  - Tailwind CSS for styling
  - Vite for fast development and building
  - Lucide React for beautiful icons
  - Comprehensive test setup with Vitest

- **Development Tools**
  - ESLint for code quality
  - TypeScript for type safety
  - Husky for git hooks
  - Vitest for unit testing
  - Code coverage reporting

- **CI/CD Pipeline**
  - Azure DevOps pipeline integration
  - Automated testing and linting
  - SonarQube code quality analysis
  - Security scanning with Snyk and OWASP
  - Container image scanning
  - Automated deployment to Kubernetes
  - JFrog Artifactory integration

- **Monitoring & Observability**
  - Prometheus for metrics collection
  - Grafana for visualization
  - Kubernetes resource monitoring
  - Application performance tracking

## 📋 Prerequisites

- Node.js 20.x or later
- Docker
- Kubernetes cluster (AKS)
- Azure DevOps account
- JFrog Artifactory account
- SonarQube instance
- Azure Container Registry

## 🛠 Local Development

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd <project-directory>
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```

4. **Run tests**
   ```bash
   npm run test        # Run tests once
   npm run test:watch  # Run tests in watch mode
   ```

5. **Build for production**
   ```bash
   npm run build
   ```

## 🐳 Docker

Build and run the application using Docker:

```bash
# Build the image
docker build -t react-app .

# Run the container
docker run -p 3000:3000 react-app
```

## ☸️ Kubernetes Deployment

The application can be deployed to Kubernetes using the provided manifests in the `k8s` directory:

```bash
# Apply Kubernetes configurations
kubectl apply -f k8s/configmap.yaml
kubectl apply -f k8s/deployment.yaml
kubectl apply -f k8s/service.yaml
kubectl apply -f k8s/ingress.yaml
kubectl apply -f k8s/hpa.yaml
```

### Monitoring Setup

Deploy Prometheus and Grafana:

```bash
# Create monitoring namespace
kubectl create namespace monitoring

# Deploy Prometheus
kubectl apply -f k8s/prometheus/

# Deploy Grafana
kubectl apply -f k8s/grafana/
```

## 📦 CI/CD Pipeline

The Azure DevOps pipeline (`azure-pipelines.yml`) includes the following stages:

1. **Test Stage**
   - Runs unit tests
   - Performs linting
   - Executes SonarQube analysis
   - Checks quality gates

2. **Security Scan Stage**
   - Snyk security scanning
   - Container image scanning
   - OWASP dependency check

3. **Publish Artifact Stage**
   - Publishes NPM package to JFrog Artifactory
   - Includes build information

4. **Build Stage**
   - Builds Docker image
   - Pushes to Azure Container Registry

5. **Setup Monitoring Stage**
   - Deploys Prometheus (if not exists)
   - Deploys Grafana (if not exists)
   - Configures monitoring stack

6. **Deploy Stage**
   - Deploys to AKS
   - Sets up secrets and configurations
   - Scales deployment
   - Verifies deployment status

### Pipeline Configuration

Required pipeline variables:
- `dockerRegistryServiceConnection`
- `k8sConnection`
- `artifactoryService`
- `snykToken`
- `grafanaAdminPassword`

## 📊 Monitoring

### Prometheus

- Metrics collection at `http://<cluster-ip>:9090`
- Configured for automatic pod discovery
- Scrapes metrics every 15 seconds

### Grafana

- Dashboard access at `http://<cluster-ip>:3000`
- Default admin username: `admin`
- Password set via Kubernetes secret

## 🔒 Security

- Row-level security enabled
- Container scanning in pipeline
- Dependency vulnerability checking
- Regular security updates
- HTTPS enforced via ingress

## 🏗 Project Structure

```
.
├── src/                  # Source files
├── k8s/                  # Kubernetes manifests
│   ├── prometheus/      # Prometheus configuration
│   └── grafana/         # Grafana configuration
├── tests/               # Test files
├── Dockerfile           # Container build instructions
├── azure-pipelines.yml  # CI/CD pipeline definition
└── package.json         # Project dependencies
```

## 📝 Environment Variables

Required environment variables:
```env
NODE_ENV=production
```

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch
3. Commit your changes
4. Push to the branch
5. Create a Pull Request

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 🆘 Support

For support, please open an issue in the repository or contact the development team.