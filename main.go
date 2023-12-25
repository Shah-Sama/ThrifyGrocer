package main

import (
    "encoding/json"
    "fmt"
    "log"
    "net/http"
    "net/smtp"
)


type EmailContent struct {
    Name    string `json:"name"`
    Email   string `json:"email"`
    Message string `json:"message"`
}

func main() {
    http.HandleFunc("/send-email", sendEmailHandler)
    log.Fatal(http.ListenAndServe(":8080", nil))
}

func sendEmailHandler(w http.ResponseWriter, r *http.Request) {
    var email EmailContent
    err := json.NewDecoder(r.Body).Decode(&email)
    if err != nil {
        http.Error(w, err.Error(), http.StatusBadRequest)
        return
    }

    sendEmail(email)
    fmt.Fprintf(w, "Email sent successfully")
}

func sendEmail(emailContent EmailContent) {
    // Set up authentication information.
    auth := smtp.PlainAuth("", "your-email@gmail.com", "your-password", "smtp.gmail.com")

    to := []string{"shaheerarfat111@gmail.com"}
    msg := []byte("To: shaheerarfat111@gmail.com\r\n" +
        "Subject: Contact Form Submission\r\n" +
       


func main() {
    http.HandleFunc("/submit-grocery-form", handleGroceryForm)
    log.Println("Starting server on :8080...")
    log.Fatal(http.ListenAndServe(":8080", nil))
}

func handleGroceryForm(w http.ResponseWriter, r *http.Request) {
    // Ensure we're getting a POST request
    if r.Method != http.MethodPost {
        http.Error(w, "Method is not supported.", http.StatusNotFound)
        return
    }

    // Parse the form data
    if err := r.ParseForm(); err != nil {
        fmt.Fprintf(w, "ParseForm() error: %v", err)
        return
    }

    // Extract form data
    fmt.Println("Received form data:")
    for key, value := range r.Form {
        fmt.Printf("%s = %s\n", key, value)
    }

    // Respond to the client
    fmt.Fprintf(w, "Received your request!")
}
