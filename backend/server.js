import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import { v4 as uuidv4 } from "uuid";

const app = express();
const PORT = 4000;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Generera engångslösenord
function generateOTP() {
  // Generera en sexsiffrig numerisk OTP
  const otp = Math.floor(100000 + Math.random() * 900000);
  return otp.toString();
}

// Din kod här. Skriv dina arrayer
const users = []; //användare
const accounts = []; //bankkonton
const sessions = []; //engångslösenord

// Din kod här. Skriv dina routes:
//home
app.get("/", (req, res) => {
  res.send("hello test bank");
});

app.get("/create", (req, res) => {
  res.send("test create");
});

//Skapa användare Ett fält för användarnamn och ett för lösenord.
//Datat ska sparas i arrayen users i backend och ett bankkonto skapas i backend med 0 kr som saldo.
//create new user - id, username, password
app.post("/create", (req, res) => {
  const { username, password } = req.body;
  const userId = uuidv4();
  const accountId = uuidv4();
  //console.log("generated id", id)

  const newUser = { id: userId, username, password }; //new user with id, username and password
  users.push(newUser);

  const newAccount = { id: accountId, userId, balance: 0 }; //new account, with id, userId balance:0
  accounts.push(newAccount);

  console.log("New user created:", newUser);

  res.send("Post new user recieved: " + JSON.stringify(newUser));
});

//login user - put userId and sessionpass in sess[]
//När man loggar in ska ett engångslösenord skapas och skickas tillbaka i response.
app.post("/login", (req, res) => {
  const { username, password } = req.body;
  const user = users.find((user) => user.username === username);

  if (!user) {
    return res.status(404).json({ error: "User not found" });
  }

  if (user.password !== password) {
    return res.status(401).json({ error: "Wrong password" });
  }

  const sessionPass = generateOTP();

  const session = {
    userId: user.id,
    token: sessionPass, //token
  };
  sessions.push(session);

  
  res.status(200).json({ username: user.username, token: sessionPass });
  //res.send("Login successful");
});

//Visa salodo (POST): "/accounts"
//Här kan man se sitt saldo och sätta in pengar på kontot.
//För att göra detta behöver man skicka med sitt engångslösenord till backend.
//När man hämtar saldot ska samma engångslösenord skickas med i Post.
app.post("/account", (req, res) => {
    const { sessionPass, username } = req.body;
    //const user = users.find((user) => user.username === username);

    // Find the user session
    const session = sessions.find((session) => session.sessionPass === sessionPass);
    if (!session) {
      return res.status(401).json({ error: "Unauthorized" });
    }
  
    // Find the account associated with the user session
    const account = accounts.find((account) => account.userId === session.userId);
    if (!account) {
      return res.status(404).json({ error: "Account not found" });
    }
  
    // Respond with the updated account data
    const responseData = {
      username: username,
      balance: account.balance,
    };
  
    res.status(200).json(responseData);
  });

  //Sätt in pengar (POST): "/me/accounts/transactions"
  app.post("/account/transactions", (req, res) => {
    const { sessionPass, depositAmount, username } = req.body;
  
    // Find the user session
    const session = sessions.find((session) => session.sessionPass === sessionPass);
    if (!session) {
      return res.status(401).json({ error: "Unauthorized" });
    }
  
    // Find the account associated with the user session
    const account = accounts.find((account) => account.userId === session.userId);
    if (!account) {
      return res.status(404).json({ error: "Account not found" });
    }
  
    // Convert depositAmount to number
    const deposit = Number(depositAmount);
    if (isNaN(deposit) || deposit <= 0) {
      return res.status(400).json({ error: "Invalid deposit amount" });
    }
  
    // Update the balance
    account.balance += deposit;
  
    // Respond with the updated account data
    const responseData = {
      username: username,
      balance: account.balance,
    };
  
    res.status(200).json(responseData);
  });

// Starta servern
app.listen(PORT, () => {
  console.log(`Bankens backend körs på http://localhost:${PORT}`);
});
