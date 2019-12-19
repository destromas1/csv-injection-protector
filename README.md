# csv-injection-protector

# Why?

If you have any Input Field and that data goes to the Database in the backend and you generate CSV files with it, then you SHOULD think about CSV injection.

Probably, the string went to your DB is injected. They can execute any operation in the cell and also your CSV file can be corrupted and you can not open that.

It can be sanitized so that string is okay for the CSV.
