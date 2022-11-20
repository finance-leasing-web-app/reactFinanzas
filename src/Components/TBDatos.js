import { useState } from "react";
import "./TBDatos.css";


const TBDatos = () => {

    const [Saldo,setSaldo]= useState('');
    function fSaldo(a,b)
    {   
        return (a*(100-b)/100);
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

    
    
    const NC = [];
    const TEA_=[];
    const Flujo=[];
    const IA=[];
    const PG=[];
    const PP=[];
    const TEP=[];
    const IP =[];
    const SI =[];
    const SII=[];
    const I=[];
    const SF=[];
    const SegDes=[];
    const Cuota=[];
    const A=[];
    const SegRie=[];
    const Comision=[];
    const Portes=[];
    const GasAdm=[];

        

    function Detalle()
        {
            this.NC="";
            this.TEA_="";
            this.TEP="";
            this.IA="";
            this.IP="";
            this.PG="S";
            this.SI="";
            this.SII="";
            this.I="";
            this.Cuota="";
            this.A="";
            this.PP="";
            this.SegDes="";
            this.SegRie="";
            this.Comision="";
            this.Portes="";
            this.GasAdm="";
            this.SF="";
            this.Flujo="";
        }

        const detalles=[];
        const [Amortizacion,setAmortizacion]= useState(0);
        const [SeguroRie,setSeguroRie]= useState(0);
        const [ComisionesPe,setComisionesPe]= useState(0);
        const [Portes_,setPortes_]= useState(0);
        detalles[0] = new Detalle();    
        
        /*prueba */
        detalles[0].NC=8;detalles[0].TEA_=8;detalles[0].TEP=8;detalles[0].IA=8;detalles[0].IP=8;detalles[0].PG=8;detalles[0].SI=8;detalles[0].SII=8;detalles[0].I=8;detalles[0].Cuota=8;detalles[0].A=8;detalles[0].PP=8;detalles[0].SegDes=8;detalles[0].SegRie=8;detalles[0].Comision=8;detalles[0].Portes=8;detalles[0].GasAdm=8;detalles[0].SF=8;detalles[0].Flujo=8    
        var Interes;
    
    
    // var TIR;
    // var VAN_;


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

        Flujo[0]=Prestamo;
        
        var TEA =Number(document.getElementById('TEA').value);

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

        var COK     =Number(document.getElementById('COK').value);
        var COKI_=Math.pow(1+(COK/100),frec/NDxA)-1;
        setCOKI(COKI_);      

        var TEP_=Math.pow((1+TEA/100),(frec/NDxA))-1;

        var IP_=Math.pow((1+IA[0]/100),(frec/NDxA))-1;
     
        //SegRie

        //Comision
        var ComPer =Number(document.getElementById('ComPer').value);

        //Portes
        var PortesPer =Number(document.getElementById('PortesPer').value);
      
        //GasAdm
        var GasAdmPer   =Number(document.getElementById('GasAdmPer').value);

        for (var i=0 ;i<N_+1;i++)
        {
            
            NC[i]=i;
            TEA_[i]=TEA;
            IA[i]=0;
            PG[i]="S";
            PP[i]=0;
            TEP[i]=TEP_;
            IP[i]=IP_;
            SegRie[i]=-SegRiePer;
            Comision[i]=-ComPer;
            Portes[i]=-PortesPer;
            GasAdm[i]=-GasAdmPer;

            if(i===0)
            {
                
                SII[0]=0; 
                I[0]=0;
                SF[0]=0;
                SI[0]=0;
            }
            else if(i===1)
            {
                SI[1]=Prestamo; 
                I[i]=SII[i]*TEP[i]; 
                Interes=Interes+I[i];

            }
            else
            if(i>1)
            {
                SI[i]=SF[i-1];
                SII[i]=SI[i]+SI[i]*IP[i];
                I[i]=SII[i]*TEP[i]; 
                Interes=Interes+I[i];
                SegDes[i]=-SII[i]*pSegDesPer;
                if(PG==="T")
               {
                   Cuota[i]=0; 
                   SF[i]=SII[i]-I[i];
                   A[i]=0;
                   Flujo[i]=Cuota[i]+PP[i]+SegRie[i]+Comision[i]+Portes[i]+GasAdm[i]+SegDes[i];
               }  
               else if(PG==="P")
               {
                   Cuota[i]=I[i];
                   SF[i]=SII[i]+A[i]+PP[i];
                   A[i]=0;
                   Flujo[i]=Cuota[i]+PP[i]+SegRie[i]+Comision[i]+Portes[i]+GasAdm[i]+SegDes[i];
               }
               else if(PG==="S")
                {
                   Cuota[i]=I[i]+A[i]+SegDes[i];
                   SF[i]=SII[i]+A[i]+PP[i];
                   A[i]=-SII[i]/(N_-NC[i]+1);
                   Flujo[i]=Cuota[i]+PP[i]+SegRie[i]+Comision[i]+Portes[i]+GasAdm[i];
                   console.log(i);
                }  
            }
        }


        for (var i=0 ;i<N_+1;i++)
        {
            detalles[i] = new Detalle(NC[i],TEA_[i],TEP[i],IA[i],IP[i],PG[i],SI[i],SII[i],I[i],Cuota[i],A[i],PP[i],SegDes[i],SegRie[i],Comision[i],Portes[i],GasAdm[i],SF[i],Flujo[i]);
            setAmortizacion += A[i];
            setSeguroRie += SegRie[i];
            setComisionesPe += Comision[i];
            setPortes_ += Portes[i];  
        }  
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
                                              <tr><td></td><td>Intereses</td><td>{Interes}</td></tr>
                                              <tr><td>Resultados …</td><td>Amortización del capital</td><td>{Amortizacion}</td></tr>
                                              <tr><td></td><td>Seguro contra todo riesgo</td><td>{SeguroRie}</td></tr>
                                              <tr><td></td><td>Comisiones periodicas</td><td>{ComisionesPe}</td></tr>
                                              <tr><td></td><td>Portes / Gastos de adm.</td><td>{Portes_}</td></tr>
                                  <tr>
                                              <td></td><td>… de Indicadores de Rentabilidad</td>
                                  </tr>
                                              <tr><td></td><td>Tasa de descuento</td><td>{COKI}</td></tr>
                                              <tr><td></td><td>TIR de la operacion</td><td>                 </td></tr>                    
                                              <tr><td></td><td>TCEA de la operacion</td><td>                </td></tr>
                                              <tr><td></td><td>VAN operacion</td><td>                       </td></tr>
                                 </tbody>     
                            </table>  
                        </tbody>
                    </table>
                    </td>  
        </tr>
                {/* Detalles */}
                <tr><td>TEA</td><td><input type="text"  id="TEA" onChange={handleChange}></input></td></tr>
                <tr><td>IA</td><td><input type="text"   id="IA" onChange={handleChange}></input></td></tr>
                <tr>
                    <td colSpan="2">
                    <table>
                        <thead>
                            <th>N°</th><th>TEA</th><th>i" = TEP = TEM</th><th>IA</th><th>IP</th><th>P.G.</th><th>Saldo Inicial</th><th>Saldo Inicial Indexado</th><th>Interes</th><th>Cuota</th><th>Amort.</th><th>Prepago</th><th>Seguro desgrav</th><th>Seguro riesgo</th><th>Comisión</th><th>Portes</th><th>Gastos Adm</th><th>SaldoFinal</th><th>Flujo</th>
                        </thead>
                        <tbody>
                        {detalles.map((Detalle,key)=>
                            <tr key={key}> 
                            <td>{Detalle.NC}</td>
                            <td>{Detalle.TEA}</td>
                            <td>{Detalle.TEP}</td>
                            <td>{Detalle.IA}</td>
                            <td>{Detalle.IP}</td>
                            <td>{Detalle.PG}</td>
                            <td>{Detalle.SI}</td>
                            <td>{Detalle.SII}</td>
                            <td>{Detalle.I}</td>
                            <td>{Detalle.Cuota}</td>
                            <td>{Detalle.A}</td>
                            <td>{Detalle.PP}</td>
                            <td>{Detalle.SegDes}</td>
                            <td>{Detalle.SegRie}</td>
                            <td>{Detalle.Comision}</td>
                            <td>{Detalle.Portes}</td>
                            <td>{Detalle.GasAdm}</td>
                            <td>{Detalle.SF}</td>
                            <td>{Detalle.Flujo}</td>
                            </tr>
                        )}
                        </tbody>
                    </table>
                    </td>
                </tr>
            </table> 
        </div>
        
    );
}
 
export default TBDatos;