## Project Description

### Objective:

The aim of the "Simple Online Shop" project is to provide users with a platform for browsing, adding products to the shopping cart, summarizing orders, and sending order information to the XAMPP server in MySQL. The shop allows users to conveniently shop online while offering a simple and intuitive interface.

### Functional Description:

- **Browsing Products:** Users can browse the list of available products in the shop.
- **Adding to Cart:** Ability to add selected products to the shopping cart.
- **Order Summarization:** Automatic calculation of the total order value.
- **Sending Order Information:** Order details are transmitted to the XAMPP server in MySQL.

## Requirements Analysis:

### Functional Requirements:

- **Product Browsing:** Users should be able to view the list of available products in the shop.
- **Adding to Cart:** Users must be able to add products to their shopping cart.
- **Order Summarization:** The system should automatically calculate the total value of the items in the cart.
- **Sending Order Information:** Order details need to be securely transmitted to the XAMPP server.

### Non-functional Requirements:

- **Responsiveness:** The user interface should be responsive and adapt to different devices.
- **Data Security:** Ensuring secure transmission of user data to the server.
- **Performance:** The shop should perform efficiently even with a large number of products and users.

## Interface Design:

### Sketches/Visualizations:

- _Homepage:_ Display of product listings and the shopping cart.
- _Product Card:_ Detailed product information with the option to add to cart.
- _Shopping Cart:_ Presentation of added products and the total order amount.

### Site Map:

- _Homepage_
  - Product listings
  - Shopping cart
- _Product Card_
  - Product details
  - Add to cart button
- _Shopping Cart_
  - List of items in the cart
  - Order total

## System Architecture:

### Data Structure Description:

The shop stores data about products and orders in a MySQL database on the XAMPP server.

### Architecture Diagrams:

The architecture is based on a client-server model, where:

- **Client:** The user interface in the web browser.
- **Server:** The server-side application handling client requests and communicating with the database.

## Implementation:

### Technology Description:

- **Frontend:** HTML, CSS, JavaScript.
- **Backend:** PHP (handling client requests and communicating with the MySQL database).
- **Database:** MySQL (XAMPP server).

### Code Structure:

- _Directories/Files_: Separate files for frontend, backend, and database configuration.
- _Coding Style_: Utilization of modularity, readability, and secure coding practices.

### Implementation Details:

1. **Frontend:** The user interface will be designed for simplicity and intuitiveness using HTML, CSS, and JavaScript to create a responsive interface.
2. **Backend:** The PHP server-side application will handle client requests, such as adding products to the cart and sending orders to the MySQL database.
3. **Database:** We will use the MySQL database on the XAMPP server to store product and order information.

## Testing:

### Testing Plan:

- **Unit Testing:** Ensuring the correctness of functions such as adding products to the cart and calculating order totals.
- **Integration Testing:** Verifying the interaction between frontend and backend components.
- **User Interface Testing:** Checking user interaction across different devices.
- **Performance Testing:** Evaluating the shop's performance under load.

### Testing Procedures:

- Developing a set of test cases for each application function.
- Establishing procedures for reporting and fixing discovered bugs.

## Deployment and Maintenance:

### Deployment Plan:

- **Deployment Phases:** Testing, corrections, publication on hosting server or local XAMPP server.
- **Timelines:** Setting dates for planned deployment stages.

### Maintenance Procedures:

- **Technical Support:** Establishing communication channels with users for issue reporting.
- **Updates:** Planning regular updates based on user feedback and needs.

## Schedule:

### Project Plan:

- **Implementation Stages:** Dividing tasks into specific objectives (e.g., frontend implementation, backend development, testing).
- **Timelines:** Determining the time required for each stage.

### Costs:

### Estimated Costs:

- **Application Development:** Based on hours of work or team of developers.
- **Maintenance Costs:** Hosting fees, XAMPP server expenses, technical support.

---

[Polish](<Documents/README(PL).md>)
