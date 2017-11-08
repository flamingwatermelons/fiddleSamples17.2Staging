$(function () {
           $("#successEditor1").igNotifier({
               direction: "right",
               notifyLevel: "success",
               contentTemplate: function(status) {
                   var template;

                   switch (status) {
                       case "info":
                           template = "Information message.";
                           break;
                       case "success":
                           template = "Success message.";
                           break;
                       case "warning":
                           template = "Warning message.";
                           break;
                       case "error":
                           template = "Error message.";
                           break;
                   }
                   return template;
               },
            }).igNotifier("notify", "success");

            $("#state").on("change", function myfunction() {
                var state = $(this).find("option:selected").val();

                $("#successEditor1").igNotifier("option", "state", state);
            });

            $("#mode").on("change", function myfunction() {
                var mode = $(this).find("option:selected").val();

                $("#successEditor1").igNotifier("option", "mode", mode);
            });

            $("#direction").on("change", function myfunction() {
                var direction = $(this).find("option:selected").val();

                $("#successEditor1").igNotifier("option", "direction", direction);
            });

            $("#show").on("click", function myfunction() {
                $("#successEditor1").igNotifier("show");
            });
            $("#hide").on("click", function myfunction() {
                $("#successEditor1").igNotifier("hide");
            });
        });