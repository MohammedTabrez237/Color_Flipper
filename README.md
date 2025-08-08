# 🎨 Color Flipper

A simple and interactive web application that allows users to change the background color of the page with the click of a button. Choose from predefined colors or generate random colors!

## ✨ Features

- **Pre-defined Colors**: Quick access to Green, Red, and Blue colors
- **Random Color Generator**: Generate millions of unique colors randomly
- **Responsive Design**: Works seamlessly on desktop and mobile devices
- **Clean UI**: Minimal and intuitive interface
- **Smooth Transitions**: Colors change smoothly for better user experience

## 🚀 Demo


## 🛠️ Technologies Used

- **HTML5**: Semantic markup structure
- **CSS3**: Styling and responsive design
- **JavaScript**: Interactive functionality and color manipulation

## 📁 Project Structure

```
color_flipper/
├── index.html      # Main HTML file
├── style.css       # Styling and responsive design
├── script.js       # JavaScript functionality
└── README.md       # Project documentation
```

## 🎯 How to Use

1. **Clone or download** the project files
2. **Open** `index.html` in any modern web browser
3. **Click buttons** to change background colors:
   - **Green Button**: Sets background to green
   - **Red Button**: Sets background to red
   - **Blue Button**: Sets background to blue
   - **Random Button**: Generates a random RGB color

## 🔧 Installation

### Option 1: Direct Download
1. Download the ZIP file
2. Extract to your desired location
3. Open `index.html` in your browser

### Option 2: Clone with Git
```bash
git clone [repository-url]
cd color_flipper
```


## 🎮 Usage Examples

### Basic Color Change
```javascript
// Set specific color
setColor('purple'); // Changes background to purple
```

### Random Color Generation
```javascript
// Generate random RGB color
randomColor(); // Creates colors like rgb(123, 45, 67)
```


### Modifying Random Color Range
To limit random colors to specific ranges:

```javascript
function randomPastelColor() {
    const r = Math.round(Math.random() * 127 + 128); // 128-255
    const g = Math.round(Math.random() * 127 + 128); // 128-255
    const b = Math.round(Math.random() * 127 + 128); // 128-255
    
    const color = `rgb(${r}, ${g}, ${b})`;
    body.style.backgroundColor = color;
}
```

## 🐛 Known Issues

- **Random Color Function**: There's a small bug in the random color generation where the green value appears twice in the RGB string
- **Browser Compatibility**: Works best in modern browsers (Chrome, Firefox, Safari, Edge)

## 🔮 Future Enhancements

- [ ] Color palette/swatch display
- [ ] Save favorite colors
- [ ] Color hex code display
- [ ] Dark/light mode toggle
- [ ] Color history
- [ ] Keyboard shortcuts
- [ ] Color picker integration
- [ ] Export color codes

## 🤝 Contributing

Contributions are welcome! Feel free to:
1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request

## 📄 License

This project is open source.

## 🙋‍♂️ Support

If you have any questions or suggestions, please open an issue or reach out to the maintainers.

---

**Happy Color Flipping!** 🌈
