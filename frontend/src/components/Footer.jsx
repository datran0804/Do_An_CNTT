function Footer() {
  return (
    <div>
      <p className="text-sm text-gray-500 flex items-center">
        �� 2022 MangaReader. All rights reserved.
      </p>
      <ul className="flex space-x-4">
        <li>About</li>
        <li>Contact</li>
        <li>Help</li>
        <li>Terms</li>
        <li>Privacy</li>
      </ul>
      <div className="flex items-center space-x-4">
        <img
          src="https://mangadex.org/images/logo.png"
          alt="MangaDex Logo"
          width="24"
        />
        <a
          href="https://mangadex.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          MangaDex
        </a>
      </div>
    </div>
  );
}
export default Footer;
