<script>
    // Function to share the result as an image using Canvas API (JPEG format with reduced file size)
    function shareAsImage() {
        const resultSection = document.getElementById('result');
        
        // Set up the canvas
        const canvas = document.createElement('canvas');
        const ctx = canvas.getContext('2d');
        
        // Set the canvas size based on the result section's dimensions
        const resultWidth = resultSection.offsetWidth;
        const resultHeight = resultSection.offsetHeight;
        canvas.width = resultWidth;
        canvas.height = resultHeight;
        
        // Set the background to white
        ctx.fillStyle = '#ffffff'; // White color
        ctx.fillRect(0, 0, canvas.width, canvas.height); // Fill the entire canvas with white

        // Set the font and styling for the text
        ctx.font = '16px Arial';
        ctx.fillStyle = '#000'; // Black text
        ctx.textBaseline = 'top';

        // Draw the title and content to the canvas
        ctx.fillText('Calculation Result:', 10, 10);

        // Access the table rows from the resultTable
        const resultTableRows = document.getElementById("resultTable").getElementsByTagName('tbody')[0].rows;
        let yOffset = 30;
        
        // Loop through the table rows and draw them to the canvas
        for (let i = 0; i < resultTableRows.length; i++) {
            const cells = resultTableRows[i].cells;
            const denomination = cells[0].textContent;
            const count = cells[1].textContent;
            const totalValue = cells[2].textContent;
            ctx.fillText(denomination + " " + count + " " + totalValue, 10, yOffset);
            yOffset += 20; // Space between lines
        }

        // Add the total amount text
        const totalAmountText = document.getElementById("totalAmount").textContent;
        ctx.fillText(totalAmountText, 10, yOffset);

        // Convert the canvas to a data URL (JPEG format with reduced quality)
        const imageUrl = canvas.toDataURL('image/jpeg', 0.7); // Quality set to 0.7 (70%)

        // Create a temporary link element to trigger the download
        const link = document.createElement('a');
        link.href = imageUrl;
        link.download = 'denomination_calculator_result.jpg'; // Name of the downloaded image (JPEG format)
        
        // Trigger the click event on the link to start the download
        link.click();
    }
</script>
