$(function () {
var northwindProductsEN = [
            { "ProductID": 1, "ProductName": "Chai" }, { "ProductID": 2, "ProductName": "Chang" }, { "ProductID": 3, "ProductName": "Aniseed Syrup"}, { "ProductID": 4, "ProductName": "Chef Anton\u0027s Cajun Seasoning" },
            { "ProductID": 5, "ProductName": "Chef Anton\u0027s Gumbo Mix" }, { "ProductID": 6, "ProductName": "Grandma\u0027s Boysenberry Spread" }, { "ProductID": 7, "ProductName": "Uncle Bob\u0027s Organic Dried Pears" },
            { "ProductID": 8, "ProductName": "Northwoods Cranberry Sauce" }, { "ProductID": 9, "ProductName": "Mishi Kobe Niku" }, { "ProductID": 10, "ProductName": "Ikura" }, { "ProductID": 11, "ProductName": "Queso Cabrales", "CategoryName": "Dairy Products" },
            { "ProductID": 12, "ProductName": "Queso Manchego La Pastora" }, { "ProductID": 13, "ProductName": "Konbu" }, { "ProductID": 14, "ProductName": "Tofu" }, { "ProductID": 15, "ProductName": "Genen Shouyu" }, 
            { "ProductID": 16, "ProductName": "Pavlova" }, { "ProductID": 17, "ProductName": "Alice Mutton" }, { "ProductID": 18, "ProductName": "Carnarvon Tigers" }, { "ProductID": 19, "ProductName": "Teatime Chocolate Biscuits" },
            { "ProductID": 20, "ProductName": "Sir Rodney\u0027s Marmalade" }, { "ProductID": 21, "ProductName": "Sir Rodney\u0027s Scones" }, { "ProductID": 22, "ProductName": "Gustaf\u0027s Knäckebröd" }, { "ProductID": 23, "ProductName": "Tunnbröd" },
            { "ProductID": 24, "ProductName": "Guaraná Fantástica" }, { "ProductID": 25, "ProductName": "NuNuCa Nuß-Nougat-Creme" }, { "ProductID": 26, "ProductName": "Gumbär Gummibärchen" }, { "ProductID": 27, "ProductName": "Schoggi Schokolade" },
            { "ProductID": 28, "ProductName": "Rössle Sauerkraut" }, { "ProductID": 29, "ProductName": "Thüringer Rostbratwurst" }, { "ProductID": 30, "ProductName": "Nord-Ost Matjeshering" }
        ]
        $(function () {

            $("#autoCompleteCombo").igCombo({
                width: "270px",
                textKey: "ProductName",
                valueKey: "ProductID",
                dataSource: northwindProducts,
                filteringType: "local",
                autoComplete: true,
                placeHolder: "Focus me...",
                dropDownOrientation: "bottom"
            });

            $("#filterContainsCombo").igCombo({
                width: "270px",
                textKey: "ProductName",
                valueKey: "ProductID",
                dataSource: northwindProducts,
                filteringType: "local",
                filteringCondition: "contains",
                highlightMatchesMode: "contains",
                placeHolder: "Focus me...",
                dropDownOrientation: "bottom"
            });

            $("#caseSensitiveCombo").igCombo({
                width: "270px",
                textKey: "ProductName",
                valueKey: "ProductID",
                dataSource: northwindProductsEN,
                filteringType: "local",
                autoSelectFirstMatch: true,
                caseSensitive: true,
                autoComplete: true,
                placeHolder: "Focus me...",
                dropDownOrientation: "bottom"
            });


            $("#autoCompleteCombo").igNotifier({
                showOn: "focus",
                state: "success",
                direction: "auto",
                closeOnBlur: true,
                showIcon: false,
                mode: "popover",
                locale: {
                    successMsg: "When autoComplete is enabled, the filtering condition is always 'startsWith'. Start typing .."
                }
            });

            $("#filterContainsCombo").igNotifier({
                showOn: "focus",
                state: "success",
                direction: "auto",
                showIcon: false,
                closeOnBlur: true,
                mode: "popover",
                locale: {
                    successMsg: "Type some text in order to check how 'Contains' filtering condition works"
                }
            });

            $("#caseSensitiveCombo").igNotifier({
                showOn: "focus",
                state: "success",
                direction: "auto",
                showIcon: false,
                closeOnBlur: true,
                mode: "popover",
                locale: {
                    successMsg: "If set to true, filtering and auto selection will be case-sensitive."
                }
            });
        });
});