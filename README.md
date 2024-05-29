# Simple Blog Application

This project is a simple blog application built with Express.js and EJS. It allows users to create and view blog posts. The application demonstrates basic CRUD functionality using server-side rendering with EJS templates.

## Features

- **Home Page**: View all blog posts.
- **Create Post**: Navigate to a page to create a new blog post.
- **Form Submission**: Submit a new blog post using a form.
- **Dynamic Content**: Posts are dynamically rendered on the home page.
- **Basic Styling**: Includes header and footer partials for consistent layout.

## Installation

1. **Clone the repository:**
    ```sh
    git clone https://github.com/yourusername/simple-blog-app.git
    cd simple-blog-app
    ```

2. **Install dependencies:**
    ```sh
    npm install
    ```

3. **Run the application:**
    ```sh
    npm start
    ```
    The server will start on `http://localhost:3000`.

## Usage

- Navigate to `http://localhost:3000` to view all blog posts.
- Click on "Create Post" in the navigation menu to create a new blog post.
- Fill out the form and submit to add the post to the home page.

## Project Structure

- **index.js**: Main server file that sets up routes and handles requests.
- **views/**: EJS templates for rendering pages.
  - **partials/**: Contains `header.ejs` and `footer.ejs` for reusable layout components.
  - `index.ejs`: Template for the home page.
  - `create.ejs`: Template for the create post page.
- **public/**: Directory for static files like CSS.

## Future Enhancements

- **Form Validation**: Implement server-side validation for form submissions.
- **Persistent Storage**: Integrate a database to store posts. (Work in progress)
- **Post Management**: Add features to edit and delete posts.
- **User Authentication**: Restrict post creation and management to authenticated users.
- **Styling**: Improve the UI with additional CSS and design enhancements.

## Contributing

Contributions are welcome! Please submit a pull request or open an issue to discuss changes.

## License

This project is licensed under the MIT License.

---

Feel free to customize this description to better fit your project specifics and style!
