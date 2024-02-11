-- Check if the table exists, and if not, create it
IF NOT EXISTS (SELECT 1 FROM INFORMATION_SCHEMA.TABLES WHERE TABLE_NAME = 'Outfits')
BEGIN
    -- Create Outfits table
    CREATE TABLE Outfits (
        id INT PRIMARY KEY IDENTITY(1,1),
        clothing_name VARCHAR(255) NOT NULL,
        clothing_type VARCHAR(255) NOT NULL,
        clothing_color VARCHAR(255) NOT NULL
    );

    -- Insert clothing data
    INSERT INTO Outfits (clothing_name, clothing_type, clothing_color) 
    VALUES
    ('Ralph Lauren Quarter Zip', 'Jumper', 'Navy'),
    ('Ralph Lauren Chinos', 'Trouser', 'Beige');
END
