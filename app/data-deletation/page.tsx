export default function DataDeletionPage() {
  return (
    <main
      style={{
        minHeight: "100vh",
        backgroundColor: "#f5f7fa",
        color: "#172033",
        fontFamily: "Arial, sans-serif",
        lineHeight: 1.7,
        padding: "40px 20px",
        boxSizing: "border-box",
      }}
    >
      <article
        style={{
          maxWidth: "900px",
          margin: "0 auto",
          backgroundColor: "#ffffff",
          padding: "40px",
          borderRadius: "16px",
          boxSizing: "border-box",
        }}
      >
        <h1 style={{ lineHeight: 1.2 }}>Delete My Account</h1>

        <p>
          Brand Gallery users may delete their account at any time.
        </p>

        <h2>Option 1</h2>

        <p>
          Open the Brand Gallery app and use the{" "}
          <strong>Delete Account</strong> option inside your profile settings.
        </p>

        <h2>Option 2</h2>

        <p>
          If you cannot access the app, send an account deletion request by
          email.
        </p>

        <h2>What is Deleted?</h2>

        <ul>
          <li>Your account profile</li>
          <li>Name, email, and phone number</li>
          <li>Saved addresses</li>
          <li>Shopping cart and wishlist data</li>
          <li>Notification preferences</li>
          <li>Authentication credentials</li>
        </ul>

        <p>
          Some completed order records may be retained in anonymized form when
          required for legal, accounting, security, or fraud-prevention
          purposes.
        </p>

        <h2>Location Information</h2>

        <p>
          Brand Gallery may use GPS location only when the user chooses to use
          location assistance. The application does not continuously track
          users and does not collect background location data.
        </p>

        <h2>Request Account Deletion</h2>

        <p>
          Email:{" "}
          <a
            href="mailto:sarwari3.af@gmail.com"
            style={{ color: "#2563eb" }}
          >
            sarwari3.af@gmail.com
          </a>
          <br />
          Phone: 0770694629
        </p>

        <p>
          Please include the email address or phone number associated with your
          account when submitting a deletion request.
        </p>

        <p>Email requests are typically processed within 30 days.</p>
      </article>
    </main>
  );
}