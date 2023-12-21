package main

import (
    "fmt"
    "log"
    "net/http"
)

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
