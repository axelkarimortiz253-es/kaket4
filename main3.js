
const { createApp } = Vue;

createApp({

    data() {
        return {

            fleetwayPassives: [
                {
                    name: "Health",
                    description: "Fleetway tiene 355 HP. Los ataques y ciertos efectos de los supervivientes pueden reducir su salud. Si llega a 0 HP, pierde la partida."
                },
                {
                    name: "Critical Hit",
                    description: "Tiene un 10% de probabilidad de realizar golpes críticos. Aumenta el daño de M1, Chaos Dash y Fateful Drain."
                },
                {
                    name: "Flight",
                    description: "Puede volar al saltar mientras está en el aire. Su velocidad de vuelo aumenta x1.8 y utiliza una barra de energía de 150 puntos."
                }
            ],

            fleetwayAbilities: [
                {
                    name: "M1 - Attack",
                    description: "Realiza un rápido golpe hacia delante.",
                    damage: "30 daño | 37 daño crítico"
                },
                {
                    name: "E - Chaos Dash",
                    description: "Se convierte en una bola y se lanza a gran velocidad. Puede golpear varias veces a los supervivientes.",
                    damage: "12 por golpe | 24 crítico"
                },
                {
                    name: "X - Fateful Drain",
                    description: "Se lanza hacia delante y agarra a un superviviente, absorbiendo su vida para recuperar la suya.",
                    damage: "35 daño total | 49 crítico"
                },
                {
                    name: "Burst",
                    description: "Acumula energía del caos y provoca una explosión que quema a los supervivientes cercanos.",
                    damage: "Daño variable según la distancia y el efecto Burning."
                }
            ],

            kolossosPassives: [
                {
                    name: "Hulk Power",
                    description: "Cuando salta contra una superficie vertical, crea una escalera roja que puede utilizar para escalar paredes y alcanzar lugares elevados."
                }
            ],

            kolossosAbilities: [
                {
                    name: "M1 - Attack",
                    description: "Ataca con su enorme brazo mutado, realizando un corte o una estocada.",
                    damage: "55 daño"
                },
                {
                    name: "E - Charge",
                    description: "Corre hacia delante e impala a los supervivientes que encuentra. Si los estrella contra una pared, reciben daño adicional.",
                    damage: "25 daño inicial + 15 al impactar contra una pared"
                },
                {
                    name: "Q - Grab",
                    description: "Se lanza hacia un superviviente y lo agarra. Puede golpearlo hasta tres veces mientras lo sostiene.",
                    damage: "12 por golpe"
                },
                {
                    name: "X - It Can See",
                    description: "Revela la ubicación de todos los supervivientes durante 5.5 segundos.",
                    damage: "No causa daño"
                },
                {
                    name: "Z - Block",
                    description: "Adopta una postura defensiva que bloquea los aturdimientos y contraataca.",
                    damage: "35 daño con contraataque a distancia. El contraataque cercano no causa daño directo."
                }
            ]

        };
    }

}).mount("#app");
