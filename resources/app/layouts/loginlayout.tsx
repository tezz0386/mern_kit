import { Outlet } from "react-router";

const LoginLayout: React.FC = () => {
  return (
    <html lang="en">
        <head>
            <meta charSet="utf-8" />
            <meta name="viewport" content="width=device-width, initial-scale=1" />
        </head>
        <body>
            <Outlet />   
        </body>
    </html>
  );
};
export default LoginLayout;
