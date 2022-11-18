import { useState } from "react";
import "./TBDatos.css";


const TBDatos = () => {

    const [Saldo,setSaldo]= useState('');
    function fSaldo(a,b)
    {   
        return a-((b/a))*100;
    }

    const [Prestamo,setPrestamo]= useState('');
    function fPrestamo(q,w,e,r,t,y)
    {   
        return q+w+e+r+t+y;
    }


    const [NCxA,setNCxA]= useState('');
    function fNCxA(q,w)
    {   
        return w/q;
    }

    const [N,setN]= useState('');
    function fN(q,w)
    {   
        return q*w;
    }

    const [pSegDesPer,setpSegDesPer]= useState('');
    function fpSegDesPer(q,w)
    {
        return q*w/30
    }

    const [SegRiePer,setSegRiePer]= useState('');

    const [COKI,setCOKI]=useState('');
    

    const handleChange =(event) =>
    {
        var PV =Number(document.getElementById('PV').value);
        var pCI =Number(document.getElementById('pCI').value);
        

        var Saldo_=fSaldo(PV,pCI);
        setSaldo(Saldo_);

        var frec =Number(document.getElementById('frec').value);
        var NDxA =Number(document.getElementById('NDxA').value);

        var NCxA_=fNCxA(frec,NDxA);
        setNCxA(NCxA_);
        
        var NA =Number(document.getElementById('NA').value);
        var N_=fN(NCxA_,NA)
        setN(N_);

        var pSegDes =Number(document.getElementById('pSegDes').value);
        var pSegDesPer_=fpSegDesPer(pSegDes,frec);
        setpSegDesPer(pSegDesPer_);


        var pSegRie =Number(document.getElementById('pSegRie').value);
        var SegRiePer_=(pSegRie/100)*PV/NCxA;
        setSegRiePer(SegRiePer_);


        var GI1 =Number(document.getElementById('GI1').value);
        var GI2 =Number(document.getElementById('GI2').value);
        var GI3 =Number(document.getElementById('GI3').value);
        var GI4 =Number(document.getElementById('GI4').value);
        var GI5 =Number(document.getElementById('GI5').value);

        var Prestamo_=fPrestamo(GI1,GI2,GI3,GI4,GI5,Saldo_);
        setPrestamo(Prestamo_);

        var ComPer      =Number(document.getElementById('ComPer').value);    
        var PortesPer   =Number(document.getElementById('PortesPer').value);
        var GasAdmPer   =Number(document.getElementById('GasAdmPer').value);
        var COK     =Number(document.getElementById('COK').value);

        var COKI_=Math.pow(1+COK,frec/NDxA)-1;
        setCOKI(COKI_);

        
        
        
        
        

        // console.log(Saldo);
    }

    
    

    return (  
        <div classid="TBDatos">
            <nav>
                <h1>
                    Metodo Aleman
                </h1>
            </nav>
            <table class="tablaPrincipal" border="1" cellPadding="30px" width="50%" cellspacing="10px">
                <tr>
                    <td>
                    <table>
                        <tbody>
                        <td >
                            <tr>
                                      <td></td><td>...del prestamo</td>
                            </tr>
                                      <tr><td></td><td>Precio de Venta del Activo</td><td><input type="text"    id="PV"     onChange={handleChange}></input></td></tr>
                                      <tr><td></td><td>Cuota Inicial</td>                <td><input type="text" id="pCI"    onChange={handleChange}></input></td></tr>
                                      <tr><td></td><td>Nº de Años</td><td><input type="text"                    id="NA"     onChange={handleChange}></input></td></tr>
                                      <tr><td></td><td>Frecuencia de pago</td><td><input type="text"            id="frec"   onChange={handleChange}></input></td></tr>
                                      <tr><td></td><td>Nº de días por año</td><td><input type="text"            id="NDxA"   onChange={handleChange}></input></td></tr>
                            <tr>
                                        <td></td><td>...de los costes/gastos iniciales</td>
                            </tr>
                                        <tr><td></td><td>Costes Notariales</td><td><input type="text"              id="GI1" onChange={handleChange}></input></td></tr>
                                        <tr><td></td><td>Costes Registrales</td><td><input type="text"             id="GI2" onChange={handleChange}></input></td></tr>
                                        <tr><td></td><td>Tasación</td><td><input type="text"                       id="GI3" onChange={handleChange}></input></td></tr>
                                        <tr><td></td><td>Comisión de estudio</td><td><input type="text"            id="GI4" onChange={handleChange}></input></td></tr>
                                        <tr><td>Datos...</td><td>Comisión de activación</td><td><input type="text" id="GI5" onChange={handleChange}></input></td></tr>
                            <tr>
                                        <td></td><td>… de los costes/gastos periodicos</td>
                            </tr>
                                        <tr><td></td><td>Comisión periodica</td><td><input type="text"              id="ComPer"     onChange={handleChange}></input></td></tr>
                                        <tr><td></td><td>Portes</td><td><input type="text"                          id="PortesPer"  onChange={handleChange}></input></td></tr>
                                        <tr><td></td><td>Gastos de Administración</td><td><input type="text"        id="GasAdmPer"  onChange={handleChange}></input></td></tr>
                                        <tr><td></td><td>% de Seguro desgravamen</td><td><input type="text"         id="pSegDes"    onChange={handleChange}></input></td></tr>
                                        <tr><td></td><td>% de Seguro riesgo</td><td><input type="text"              id="pSegRie"    onChange={handleChange}></input></td></tr>
                            <tr>
                                        <td></td><td>… del costo de oportunidad</td>
                            </tr>
                                      <tr><td></td><td>Tasa de descuento Ks</td><td><input type="text"              id="COK" onChange={handleChange}></input></td></tr>
                        </td>
                        </tbody>
                    </table>

                    </td>

                    {/* resultados */}
                    <td>
                    <table>
                        <tbody>
                        <table>
                                <tbody>
                                  <tr>
                                              <td></td><td>...del financiamiento</td>
                                  </tr>
                                              <tr><td></td><td>Saldo a financiar</td>{Saldo}</tr>
                                              <tr><td></td><td>Monto del préstamo</td>{Prestamo}</tr>
                                              <tr><td></td><td>Nº Cuotas por Año</td><td>{NCxA}</td></tr>
                                              <tr><td></td><td>Nº Total de Cuotas</td><td>{N}</td></tr>
                                  <tr>
                                              <tr></tr>
                                              <td>...de los costes/gastos periodicos</td>
                                  </tr>
                                              <tr><td></td><td>% de Seguro desgrav. per.</td><td>{pSegDesPer}</td></tr>
                                              <tr><td></td><td>Seguro de riesgo</td><td>{SegRiePer}</td></tr>

                                              <tr><td></td><td>...totales por...</td><td></td></tr>
                                              <tr><td></td><td>Intereses</td><td>                           <input type="text" id="Totales1"></input></td></tr>
                                              <tr><td>Resultados …</td><td>Amortización del capital</td><td><input type="text" id="Totales2"></input></td></tr>
                                              <tr><td></td><td>Seguro contra todo riesgo</td><td>           <input type="text" id="Totales3"></input></td></tr>
                                              <tr><td></td><td>Comisiones periodicas</td><td>               <input type="text" id="Totales4"></input></td></tr>
                                              <tr><td></td><td>Portes / Gastos de adm.</td><td>                            <input type="text" id="Totales5"></input></td></tr>
                                  <tr>
                                              <td></td><td>… de Indicadores de Rentabilidad</td>
                                  </tr>
                                              <tr><td></td><td>Tasa de descuento</td><td>{COKI}</td></tr>
                                              <tr><td></td><td>TIR de la operacion</td><td><input type="text"   id="TIR"></input></td></tr>                    
                                              <tr><td></td><td>TCEA de la operacion</td><td></td></tr>
                                              <tr><td></td><td>VAN operacion</td><td><input type="text"    id="VAN"></input></td></tr>
                                 </tbody>     
                            </table>  
                        </tbody>
                    </table>
                    </td>  
        </tr>
                {/* Detalles */}
                <tr>
                    <td colSpan="2">
                    <table>
                        <thead>
                            <th>N°</th><th>TEA</th><th>i" = TEP = TEM</th><th>IA</th><th>IP</th><th>P.G.</th><th>Saldo Inicial</th><th>Saldo Inicial Indexado</th><th>Interes</th><th>Cuota</th><th>Amort.</th><th>Prepago</th><th>Seguro desgrav</th><th>Seguro riesgo</th><th>Comisión</th><th>Portes</th><th>Gastos Adm</th><th>SaldoFinal</th><th>Flujo</th>
                        </thead>
                        <tbody>

                        </tbody>
                    </table>
                    </td>
                </tr>
            </table> 

        </div>
        
    );
}
 
export default TBDatos;