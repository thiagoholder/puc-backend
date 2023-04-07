# Node.js SOAP Web Service Example with mitmproxy

This example demonstrates how to create a simple Node.js application to access a SOAP web service using the `soap` library and capture the request with `mitmproxy`. We use the CountryInfoService as an example.

## Requirements

- Node.js (LTS version)
- `soap` library (installed via npm)
- A proxy like Fiddler or mitmproxy (optional)

## Installation

1. Clone this repository or copy the provided `index.js` file from the example.

2. Install the necessary dependencies by running the following command in the project folder:

```bash
npm install soap
```

3. Install mitmproxy by following the instructions on the official download page: https://mitmproxy.org/#mitmproxy

# Configuration

In the `index.js` file, adjust the following values as needed:

* `wsdlUrl`: URL of the WSDL of the SOAP web service you want to access.
* `proxy`: Proxy configuration (Fiddler, mitmproxy, or other), if applicable.
* `functionName`: Name of the SOAP web service function you want to call.
* `args`: Parameters of the SOAP web service function.

## Execution

1. Start mitmproxy by running the following command in the terminal or command prompt:

```bash
mitmproxy --listen-host 127.0.0.1 --listen-port 8080
```
2. To run the application, open the terminal or command prompt in the project folder and execute:

```bash
node index.js
```
The application will make a SOAP request to the web service, and the request will be captured by mitmproxy.

3. View the captured SOAP request in mitmproxy.

After running the application, go to the terminal where mitmproxy is running, and you will see the SOAP request in the list of captured requests. You can inspect the request and response to verify that everything is working as expected.