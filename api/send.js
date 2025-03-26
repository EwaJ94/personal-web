export default async function handler(req, res) {
  if (req.method === "POST") {
    const { name, email, message } = req.body;

    if (!name || !email || !message) {
      return res.status(400).json({ error: "Všechna pole jsou povinná." });
    }

    // Simulace zpracování (zde můžete přidat např. odeslání e-mailu)
    console.log("Nová zpráva:", { name, email, message });

    return res.status(200).json({ success: "Formulář byl úspěšně odeslán." });
  } else {
    return res.status(405).json({ error: "Metoda není povolena." });
  }
}
