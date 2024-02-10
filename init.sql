USE outfitcrud;
-- Create clothing table
CREATE TABLE IF NOT EXISTS clothing (
    id INT AUTO_INCREMENT PRIMARY KEY,
    clothing_name VARCHAR(255) NOT NULL,
    clothing_type VARCHAR(255) NOT NULL,
    clothing_color VARCHAR(255) NOT NULL
)
-- Insert clothing data
INSERT INTO clothing (name, type, color) VALUES
('Ralph Lauren Quarter Zip', 'Jumper', 'Navy'),
('Ralph Lauren Chinos', 'Trouser', 'Beige');
