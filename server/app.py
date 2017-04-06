# -*- coding: utf-8 -*-

from datetime import date
from flask import Flask, jsonify, request, abort
from flask_cors import CORS
from sysacad import SysacadSession
import dateparser

app = Flask(__name__)
cors = CORS(app)

BASE_URL = 'http://www.alumnos.frro.utn.edu.ar/'

def estado_str(estado):
    return {
        "no_inscripto": 'NO_INSCRIPTO',
        "aprobada": 'APROBADA',
        "cursa": 'CURSANDO',
        "regular": 'REGULAR'
    }[estado]

def get_detalles(materia):
    estado = materia['estado']
    del estado['estado']
    return estado

def get_int_nota(nota):
    return {
        "Ausen.": None,
        "uno": 1,
        "dos": 2,
        "tres": 3,
        "cuatro": 4,
        "cinco": 5,
        "seis": 6,
        "siete": 7,
        "ocho": 8,
        "nueve": 9,
        "diez": 10
    }[nota]

@app.route("/data", methods=['POST',])
def data_route():
    data = request.get_json()
    s = SysacadSession(BASE_URL)
    try:
        s.login(data['legajo'], data['password'])
    except SysacadSession.AuthenticationError:
        return abort(400)
    
    # Examenes
    examenes = s.examenes()
    examenes_formateado = [{
        "materia": e['materia'],
        "fecha": dateparser.parse(e['fecha']),
        "nota": get_int_nota(e['nota'])
    } for e in examenes]

    # Estado académico
    estado_academico = s.estado_academico_data()
    estado_academico_formateado = [{
        "materia": m['nombre'],
        'estado': estado_str(m['estado']['estado']),
        'detalles': get_detalles(m)
    } for m in estado_academico['materias']]

    # Materias
    materias = s.materias_plan_data()
    materias_formateado = [{
        "nombre": m['materia'],
        "año": int(m['anio']) 
    } for m in materias['materias']]

    return jsonify({
        "examenes": examenes_formateado,
        "estado_academico": estado_academico_formateado,
        "materias": materias_formateado
    })


@app.route("/authenticate", methods=['POST',])
def authenticate():
    data = request.get_json()
    s = SysacadSession(BASE_URL)
    try:
        s.login(data['legajo'], data['password'])
        return ''
    except SysacadSession.AuthenticationError:
        return abort(400)

if __name__ == "__main__":
    app.run()
