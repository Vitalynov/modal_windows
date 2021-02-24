//Работа ползунков INPUT [type="range"].
const range = () => {
    var inputLeft = document.querySelector("#catalog-input-left");
    var inputRight = document.querySelector("#catalog-input-right");

    var thumbLeft = document.querySelector(".catalog-slider__thumb__left");
    var thumbRight = document.querySelector(".catalog-slider__thumb__right");
    var range = document.querySelector(".catalog-slider__range");
    var showeL = document.querySelector(".catalog-slider__inner__left");
    var showeR = document.querySelector(".catalog-slider__inner__right");

    function setLeftValue() {
        var _this = inputLeft,
            min = parseInt(_this.min),
            max = parseInt(_this.max);


        //console.log(max);

        _this.value = Math.min(parseInt(_this.value), parseInt(inputRight.value) - 1);

        var percent = ((_this.value - min) / (max - min)) * 100;

        thumbLeft.style.left = percent + "%";
        range.style.left = percent + "%";

        //функция разбиения числа по разрядам
        function divideNumberByPieces(x, delimiter) {
            return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, delimiter || " ");
        }
        let rank = _this.value;
        showeL.innerHTML = divideNumberByPieces(rank);
    }
    setLeftValue();

    function setRightValue() {
        var _this = inputRight,
            min = parseInt(_this.min),
            max = parseInt(_this.max);

        _this.value = Math.max(parseInt(_this.value), parseInt(inputLeft.value) + 1);

        var percent = ((_this.value - min) / (max - min)) * 100;
        thumbRight.style.right = (100 - percent) + "%";
        range.style.right = (100 - percent) + "%";

        //функция разбиения числа по разрядам
        function divideNumberByPieces(x, delimiter) {
            return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, delimiter || " ");
        }
        let rank = _this.value;
        showeR.innerHTML = divideNumberByPieces(rank);
    }
    setRightValue();

    inputLeft.addEventListener("input", setLeftValue);
    inputRight.addEventListener("input", setRightValue);

    inputLeft.addEventListener("mouseover", function () {
        thumbLeft.classList.add("hover");
    });
    inputLeft.addEventListener("mouseout", function () {
        thumbLeft.classList.remove("hover");
    });
    inputLeft.addEventListener("mousedown", function () {
        thumbLeft.classList.add("active");
    });
    inputLeft.addEventListener("mouseup", function () {
        thumbLeft.classList.remove("active");
    });

    inputRight.addEventListener("mouseover", function () {
        thumbRight.classList.add("hover");
    });
    inputRight.addEventListener("mouseout", function () {
        thumbRight.classList.remove("hover");
    });
    inputRight.addEventListener("mousedown", function () {
        thumbRight.classList.add("active");
    });
    inputRight.addEventListener("mouseup", function () {
        thumbRight.classList.remove("active");
    });
};

range();

/*- HTML-*/
/*- 
<div class="catalog-widget__body catalog-widget__body__none">
	<input type="range" id="catalog-input-left"	min="0"	max="2000000" value="500000"/>
	<input	type="range" id="catalog-input-right" min="0" max="2000000" value="1500000"/>

    <div class="catalog-slider__fake">
        <div class="catalog-slider__track"></div>
        <div class="catalog-slider__range"></div>
        <div
            class="catalog-slider__thumb catalog-slider__thumb__left"
        ></div>
        <div
            class="catalog-slider__thumb catalog-slider__thumb__right"
        ></div>
        <div class="catalog-slider__showe catalog-slider__showe__left">
            <span class="catalog-slider__showe__text">от</span
            ><span class="catalog-slider__inner catalog-slider__inner__left">500 000</span>
        </div>
        <div class="catalog-slider__showe catalog-slider__showe__right">
            <span class="catalog-slider__showe__text">до</span>
            <span class="catalog-slider__inner catalog-slider__inner__right">1 500 000</span>
        </div>
    </div>
</div>
-*/

/*- CSS-*/
/*-
.catalog{    
    &-widget {
		width: 100%;
		&__header {
			width: 100%;
			position: relative;
			cursor: pointer;
			margin: 0 0 19px 0;
		}
		&__titele {
			font-family: inherit;
			font-size: 16px;
			font-style: normal;
			font-weight: 600;
			line-height: 19px;
			text-align: left;
			color: $text;

			padding: 0 0 0 28px;
		}
		&__icon {
			position: absolute;
			width: 15px;
			height: 12px;
			left: 0;
			top: 50%;
			//transform: translateY(-50%);
			//transform: rotate(0deg);
			transform: translateY(-50%) rotate(0) scale(1);
			fill: #c4c4c4;
			transition: all 0.3s ease-in;
		}
		&__body {
			display: flex;
			position: relative;
			// opacity: 0;
			// visibility: hidden;
			// transition: all .3s ease-in;
			margin: 0 0 40px 0;
			&__none {
				display: none;
			}
		}
		&__radio {
			margin: 0 50px 0 0;
			cursor: pointer;
			&:last-child {
				margin: 0;
			}
			&__real {
				width: 1px;
				height: 1px;
				appearance: none;
				position: absolute;
				left: -99999px;
				&:checked {
					& + .catalog-widget__radio__fake {
						background-color: $accent;
					}
				}
			}
			&__fake {
				display: inline-block;
				width: 12px;
				height: 12px;
				border: 1.5px solid #1c62cd;
				vertical-align: bottom;
				margin: 0 12px 0 0;
			}
			&__titele {
				font-family: inherit;
				font-size: 14px;
				font-style: normal;
				font-weight: 400;
				color: $text;
			}
		}
	}
	&-slider {
		&__fake {
			position: relative;
			width: 100%;
			z-index: 1;
			height: 1px;
			margin: 0 15px;
		}
		&__track {
			position: absolute;
			height: 1px;
			left: 0;
			top: 0;
			right: 0;
			background-color: #e0e0e0;
			z-index: 1;
		}
		&__range {
			position: absolute;
			z-index: 2;
			left: 25%;
			right: 25%;
			top: -1px;
			height: 3px;
			border-radius: 5px;
			background-color: $accent;
		}
		&__thumb {
			position: absolute;

			width: 7.5px;
			height: 7.5px;
			border-radius: 50%;
			background-color: $accent;
			box-shadow: 0 0 0 0 rgba(28, 99, 206, 0.1);
			transition: box-shadow 0.3s ease-in-out;
			//color: #fff;
			//text-align: center;
			//line-height: 30px;
			z-index: 3;
			&__left {
				left: 25%;
				transform: translate(-4px, -3px);
			}
			&__right {
				right: 25%;
				transform: translate(3px, -3px);
			}
		}
		&__showe {
			display: inline-block;
			position: absolute;
			bottom: -35px;
			& > span {
				display: inline-block;
			}
			&__text {
				display: inline-block;
				margin: 0 10px 0 0;
				font-family: inherit;
				font-size: 14px;
				font-style: normal;
				font-weight: 400;
				line-height: 17px;
				text-align: left;
				color: #c4c4c4;
				//text-decoration: none;
			}

			&__left {
				left: 0px;
			}
			&__right {
				right: 0px;
			}
		}
		&__inner {
			font-family: 'Barlow', sans-serif;
			font-size: 14px;
			font-style: normal;
			font-weight: 400;
			line-height: 17px;
			text-align: left;
			text-decoration: underline;
			color: $text;
			&__right{
				width: 62px;
			}
		}
	}
}

.catalog-slider__thumb.hover {
	box-shadow: 0 0 0 7px rgba(28, 99, 206, 0.1);
}
.catalog-slider__thumb.active {
	box-shadow: 0 0 0 10px rgba(28, 99, 206, 0.2);
}

input[type='range'] {
	position: absolute;
	pointer-events: none;
	-webkit-appearance: none;
	z-index: 2;
	height: 1px;
	width: 100%;
	opacity: 0;
}
input[type='range']::-webkit-slider-thumb {
	pointer-events: all;
	width: 30px;
	height: 30px;
	border-radius: 0;
	border: 0 none;
	background-color: red;
	-webkit-appearance: none;
}
-*/