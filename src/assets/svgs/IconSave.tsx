export default function IconSave({
  width = 30,
  height = 30,
  onClick,
}: {
  width?: string | number
  height?: string | number
  onClick?: Function
}) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} viewBox="0 0 33 33" fill="none">
    <path d="M12.4001 15.2333C10.3734 15.2333 8.7334 13.5933 8.7334 11.5667C8.7334 9.53999 10.3734 7.89999 12.4001 7.89999C14.4267 7.89999 16.0667 9.53999 16.0667 11.5667C16.0667 13.5933 14.4267 15.2333 12.4001 15.2333ZM12.4001 9.89999C11.958 9.89999 11.5341 10.0756 11.2216 10.3881C10.909 10.7007 10.7334 11.1246 10.7334 11.5667C10.7334 12.0087 10.909 12.4326 11.2216 12.7452C11.5341 13.0577 11.958 13.2333 12.4001 13.2333C12.8421 13.2333 13.266 13.0577 13.5786 12.7452C13.8911 12.4326 14.0667 12.0087 14.0667 11.5667C14.0667 11.1246 13.8911 10.7007 13.5786 10.3881C13.266 10.0756 12.8421 9.89999 12.4001 9.89999Z" fill="#3366FF"/>
    <path d="M20.4 31.2333H12.4C5.15998 31.2333 2.06665 28.14 2.06665 20.9V12.9C2.06665 5.65998 5.15998 2.56665 12.4 2.56665H17.7333C18.28 2.56665 18.7333 3.01998 18.7333 3.56665C18.7333 4.11332 18.28 4.56665 17.7333 4.56665H12.4C6.25332 4.56665 4.06665 6.75332 4.06665 12.9V20.9C4.06665 27.0467 6.25332 29.2333 12.4 29.2333H20.4C26.5467 29.2333 28.7333 27.0467 28.7333 20.9V14.2333C28.7333 13.6867 29.1867 13.2333 29.7333 13.2333C30.28 13.2333 30.7333 13.6867 30.7333 14.2333V20.9C30.7333 28.14 27.64 31.2333 20.4 31.2333Z" fill="#3366FF"/>
    <path d="M24.3999 12.5667C23.8532 12.5667 23.3999 12.1133 23.3999 11.5667V3.56666C23.3999 3.16666 23.6399 2.79333 24.0132 2.64666C24.3866 2.49999 24.8132 2.57999 25.1066 2.85999L27.7732 5.52666C28.1599 5.91333 28.1599 6.55333 27.7732 6.93999C27.3866 7.32666 26.7466 7.32666 26.3599 6.93999L25.3999 5.97999V11.5667C25.3999 12.1133 24.9466 12.5667 24.3999 12.5667Z" fill="#3366FF"/>
    <path d="M21.7333 7.23331C21.4799 7.23331 21.2266 7.13998 21.0266 6.93998C20.8406 6.75179 20.7363 6.49788 20.7363 6.23331C20.7363 5.96874 20.8406 5.71483 21.0266 5.52664L23.6933 2.85998C24.0799 2.47331 24.7199 2.47331 25.1066 2.85998C25.4933 3.24664 25.4933 3.88664 25.1066 4.27331L22.4399 6.93998C22.2399 7.13998 21.9866 7.23331 21.7333 7.23331ZM3.95994 27.1666C3.74682 27.1652 3.53973 27.0957 3.3688 26.9684C3.19788 26.8411 3.07202 26.6626 3.00955 26.4588C2.94709 26.2551 2.95126 26.0367 3.02147 25.8355C3.09169 25.6342 3.22427 25.4607 3.39994 25.34L9.97327 20.9266C11.4133 19.9666 13.3999 20.0733 14.7066 21.18L15.1466 21.5666C15.8133 22.14 16.9466 22.14 17.5999 21.5666L23.1466 16.8066C24.5599 15.5933 26.7866 15.5933 28.2133 16.8066L30.3866 18.6733C30.7999 19.0333 30.8533 19.66 30.4933 20.0866C30.1333 20.5 29.4933 20.5533 29.0799 20.1933L26.9066 18.3266C26.2399 17.7533 25.1199 17.7533 24.4533 18.3266L18.9066 23.0866C17.4933 24.3 15.2666 24.3 13.8399 23.0866L13.3999 22.7C12.7866 22.18 11.7733 22.1266 11.0933 22.5933L4.53327 27.0066C4.34661 27.1133 4.14661 27.1666 3.95994 27.1666Z" fill="#3366FF"/>
    </svg>
  )
}