from flask import Flask

app = Flask(__name__)

@app.route("/")
def HolaFlask():
    return "<h1>¡Hola Flask!</h1> <hr>"

@app.route("/notas/<nota1>/<nota2>/<nota3>")
def notas(nota1, nota2, nota3):
    # Aquí puedes realizar la lógica para la opción de notas
    return f"Notas: {nota1}, {nota2}, {nota3}"

@app.route("/edades/<edad>")
def edades(edad):
    # Aquí puedes realizar la lógica para la opción de edad
    return f"Edad: {edad}"

@app.route("/arreglos/<valores>/<columnas>/<filas>")
def arreglos(valores, columnas, filas):
    # Aquí puedes realizar la lógica para la opción de arreglos
    return f"Arreglos: Valores: {valores}, Columnas: {columnas}, Filas: {filas}"

if __name__ == "__main__":
    app.run(debug=True)
