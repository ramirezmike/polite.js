function Polite(object) {
    for (let property in object) {
        if (typeof object[property] == "function") {
            let impoliteFunction = object[property];

            object[property] = function (...arguments) {
                let politeFunction = impoliteFunction.bind(this, ...arguments);
                let callerWasCurteous = false;

                setTimeout(function () {
                    if (!callerWasCurteous) {
                        throw new Error("Ah ah ah! You didn't say the magic word!");
                    }
                }, 0);

                return {
                    please: function () {
                        callerWasCurteous = true; 
                        politeFunction(); 
                    }
                };
            };
        }
    }
}