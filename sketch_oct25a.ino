int inicio = 0;
int estadoAC = 0;

void setup() {
  // put your setup code here, to run once:
  Serial.begin(9600);
  pinMode(13,OUTPUT);
  pinMode(4, INPUT);
}

void loop() {
  // put your main code here, to run repeatedly:
  estadoAC = digitalRead(4);
  if(estadoAC == 1){
    if(inicio == 1){
        inicio = 0;
      }else{
          inicio = 1;
        }
    digitalWrite(13,inicio);  
    Serial.println(estadoAC);
    delay(1000);
    }
  
}
