
  /*
 if (typeof adobe != 'undefined' && adobe.target && typeof adobe.target.triggerView === 'function') {
    console.log('adobe is ready');
  }

  document.addEventListener(adobe.target.event.REQUEST_SUCCEEDED, function(event) {
    console.log(event)
   const tokens = event.detail.responseTokens;
   console.log(tokens)


if (areTokensEmpty(tokens)) {
    return;
}
        let activityNames = [];
        let experienceNames = [];
        let uniqueTokens = distinct(tokens);

        uniqueTokens.forEach((token)=>{
            activityNames = [...activityNames,token["activity.name"]];
            experienceNames = [...experienceNames,token["experience.name"]];
        })

        // uniqueTokens.forEach(function(token) {
        //     activityNames.push(token["activity.name"]);
        //     experienceNames.push(token["experience.name"]);
        // });

console.log(uniqueTokens)


})

 const areTokensEmpty = (tokens) => {
    return tokens === undefined || tokens === null ||tokens.length <= 0;
    // return (tokens === undefined || tokens === null ||tokens.length <= 0) ? true : false;
}

    const key = (obj) => {
        return Object.keys(obj)
        .map(function(k) { return k + "" + obj[k]; })
        .join("");
    }

    const distinct = (arr) => {
       const result = arr.reduce(function(acc, e) {
            acc[key(e)] = e;
            return acc;
        }, {});

        return Object.keys(result)
        .map(function(k) { return result[k]; });
    }
    */
    (function($) {
        $(function() {
    
            function createSpinner(target) {
                var $target = $(target);    
                var $container = $('<div>');
                var $spinner = $('<div class="fa fa-spinner fa-spin" role="status">');
            
                $spinner.append($('<span class="sr-only">...</span>'));
                $container.append($spinner);
            
                if($target.next().hasClass('spinner-container')) {
                    return $container;
                }
            
                $target.append($container);
            
                return $container;
            }
    
            if($('.tcpc.get-quote').length > 0) {
                function refreshBreeds(zipCode, speciesId) {
                    $('.tcpc.get-quote #pet_breed').attr('disabled', true);
    
                    $.ajax({
                        url: `/wp-json/pet-quote/v1/getBreedsForZipCode?zipCode=${zipCode}&speciesId=${speciesId}`,
                        contentType: 'application/json',
                        type: 'GET',
                        success: function(data) {
                            $('.tcpc.get-quote #pet_breed').attr('disabled', false);
    
                            // Clear select 2 options                        
                            $('.tcpc.get-quote #pet_breed').select2('data', {}); 
                            $('.tcpc.get-quote #pet_breed').empty();
                            $('.tcpc.get-quote #pet_breed').select2({});
    
                            $('.tcpc.get-quote #pet_breed').append(new Option('Select Breed', '', true, true));
    
                            // Add new options based on breed id and species id
                            for(let breed of data) {
                                var newOption = new Option(breed.display, breed.breedId, false, false);
                                $('.tcpc.get-quote #pet_breed').append(newOption);
                            }
    
                            $('.tcpc.get-quote #pet_breed > option').each(function(o) {
                                let optionSpeciesId = $(this).attr('data-species-id');
    
                                if(optionSpeciesId && optionSpeciesId !== speciesId) {
                                    $(this).attr('disabled', true);
                                    $(this).attr('hidden', true);
                                }
                                else {
                                    $(this).attr('data-species-id', speciesId);    
                                    $(this).attr('disabled', false);
                                    $(this).attr('hidden', false);
                                }                            
                            });
                            $('.tcpc.get-quote #pet_breed').select2('val', '');
    
                            $('.tcpc.get-quote #pet_breed').trigger('change');
                        },
                        error: function(jqXHR, textStatus, errorThrown) {
                                                
                        }
                    });
                }
    
                var existingSpeciesId = $('.tcpc.get-quote #pet_species').val();
                $('.tcpc.get-quote #pet_species').change(function(e) {
                    var speciesId = $(this).val();
                    var zipCode = $('.tcpc.get-quote #zip_code').val();
        
                    $('.tcpc.get-quote #pet_breed option').attr('hidden', true);
                    if(speciesId) {
                        $('.tcpc.get-quote #pet_breed').attr('disabled', false);
                        $('.tcpc.get-quote #pet_breed option[data-species-id="' + speciesId + '"]').attr('hidden', false);
                    } else {
                        $('.tcpc.get-quote #pet_breed').attr('disabled', true);
                    }
        
                    if(existingSpeciesId != speciesId)
                    {
                        $('.tcpc.get-quote #pet_breed').val('').trigger('change');
                    }
        
                    existingSpeciesId = speciesId;
    
                    if(speciesId && zipCode) {
                        refreshBreeds(zipCode, speciesId);
                    }
        
                    $('.tcpc.get-quote #pet_breed').select2({
                        templateResult: function(option) {
                           if(option.element && (option.element).hasAttribute('hidden')){
                              return null;
                           }
                           return option.text;
                        }
                    });
                });
    
                $('.tcpc.get-quote #zip_code').on("input", function(e) {
                    var zipCode = $(this).val();
                    var speciesId = $('.tcpc.get-quote #pet_species').val();
    
                    refreshBreeds(zipCode, speciesId);
                })
        
                setTimeout(function() {
                    $('.tcpc.get-quote #pet_species').trigger('change');
                }, 100);    
            }
    
            if($('.tcpc.add-pet').length > 0) {
                function refreshBreeds(zipCode, speciesId) {
                    $('.tcpc.add-pet #pet_breed').attr('disabled', true);
    
                    $.ajax({
                        url: `/wp-json/pet-quote/v1/getBreedsForZipCode?zipCode=${zipCode}&speciesId=${speciesId}`,
                        contentType: 'application/json',
                        type: 'GET',
                        success: function(data) {
                            $('.tcpc.add-pet #pet_breed').attr('disabled', false);
    
                            // Clear select 2 options                        
                            $('.tcpc.add-pet #pet_breed').select2('data', {}); 
                            $('.tcpc.add-pet #pet_breed').empty();
                            $('.tcpc.add-pet #pet_breed').select2({});
    
                            $('.tcpc.add-pet #pet_breed').append(new Option('Select Breed', '', true, true));
    
                            // Add new options based on breed id and species id
                            for(let breed of data) {
                                var newOption = new Option(breed.display, breed.breedId, false, false);
                                $('.tcpc.add-pet #pet_breed').append(newOption);
                            }
    
                            $('.tcpc.add-pet #pet_breed > option').each(function(o) {
                                let optionSpeciesId = $(this).attr('data-species-id');
    
                                if(optionSpeciesId && optionSpeciesId !== speciesId) {
                                    $(this).attr('disabled', true);
                                    $(this).attr('hidden', true);
                                }
                                else {
                                    $(this).attr('data-species-id', speciesId);    
                                    $(this).attr('disabled', false);
                                    $(this).attr('hidden', false);
                                }                            
                            });
                            $('.tcpc.add-pet #pet_breed').select2('val', '');
    
                            $('.tcpc.add-pet #pet_breed').trigger('change');
                        },
                        error: function(jqXHR, textStatus, errorThrown) {
                                                
                        }
                    });
                }
    
                var existingSpeciesId = $('.tcpc.add-pet #pet_species').val();
                $('.tcpc.add-pet #pet_species').change(function(e) {
                    var speciesId = $(this).val();
                    var zipCode = $('.tcpc.add-pet #zip_code').val();
        
                    $('.tcpc.add-pet #pet_breed option').attr('hidden', true);
                    if(speciesId) {
                        $('.tcpc.add-pet #pet_breed').attr('disabled', false);
                        $('.tcpc.add-pet #pet_breed option[data-species-id="' + speciesId + '"]').attr('hidden', false);
                    } else {
                        $('.tcpc.add-pet #pet_breed').attr('disabled', true);
                    }
        
                    if(existingSpeciesId != speciesId)
                    {
                        $('.tcpc.add-pet #pet_breed').val('').trigger('change');
                    }
        
                    existingSpeciesId = speciesId;
    
                    if(speciesId && zipCode) {
                        refreshBreeds(zipCode, speciesId);
                    }
        
                    $('.tcpc.add-pet #pet_breed').select2({
                        templateResult: function(option) {
                           if(option.element && (option.element).hasAttribute('hidden')){
                              return null;
                           }
                           return option.text;
                        }
                    });
                });
    
                $('.tcpc.add-pet #zip_code').on("input", function(e) {
                    var zipCode = $(this).val();
                    var speciesId = $('.tcpc.add-pet #pet_species').val();
    
                    refreshBreeds(zipCode, speciesId);
                })
        
                setTimeout(function() {
                    $('.tcpc.add-pet #pet_species').trigger('change');
                }, 100);    
            }
    
            if($('.tcpc.checkout').length > 0) {
                $('.show-term-details').click(function(e) {
                    e.preventDefault();
                    $(this).parent().siblings('.term-details').toggle();
                });
    
                $('#separateBillingAddress').change(function(e) {
                    $('.separate-billing-address').toggleClass('d-none');
                    if($('.separate-billing-address').hasClass('d-none')) {
                        $('#billingAddress1').attr('required', false);
                    } else {
                        $('#billingAddress1').attr('required', true);
                    }
                });
    
                $('#print-application-acknowledgment').click(function(e) {
                    var localWindow = window.open('', 'PRINT', 'height=400,width=600');
    
                    localWindow.document.write('<html><head><title>' + document.title  + '</title>');
                    localWindow.document.write('</head><body >');
                    localWindow.document.write('<h1>' + document.title  + '</h1>');
                    localWindow.document.write(document.getElementById('application-acknowledgment').innerHTML);
                    localWindow.document.write('</body></html>');
                
                    localWindow.document.close(); // necessary for IE >= 10
                    localWindow.focus(); // necessary for IE >= 10*/
                
                    localWindow.print();
                    localWindow.close();
                });
    
                function createProcessingModal() {
                    var modal = $('<div class="tcpc checkout-modal">');
                    var div = $('<div>');
                    
                    div.append('<div class="fa fa-4x fa-spinner fa-spin" role="status">');
                    div.append('<br>');
                    div.append('<br>');
                    div.append('Your policy is being processed,<br />please don\'t leave the page.');
        
                    modal.append(div);
        
                    return modal;
                }
    
                var submitting = false;
                $('.tcpc.checkout .submit-button').click(function(e) {
                    e.preventDefault();
                    $form = $('.tcpc.checkout form');
    
                    if(submitting) {
                        return;
                    }
    
                    var $modal = createProcessingModal();
                    $('body').append($modal);
                    submitting = true;
    
                    var cardNumber = $('#cardNumber');
    
                    if(cardNumber.length > 0) {
                        $.post('/wp-json/pet-quote/v1/getTrustCommerceToken').done(function(data) {
                            var trusteeApiToken = data.trusteeApiToken;
                            var expMonth = $('#expMonth').val();
                            var expYear = $('#expYear').val();
        
                            var expiration = new Date([expMonth, 1, expYear].join('/'));
        
                            var expYearFormatted = expiration.toISOString().split('-')[0].substring(2, 4);
                            var expMonthFormatted = expiration.toISOString().split('-')[1];
        
                            var params = {
                                cc: $('#cardNumber').val(),
                                exp: expMonthFormatted + expYearFormatted,
                                token: trusteeApiToken
                            };
                            
                            $.ajax({
                                url: '/wp-json/pet-quote/v1/saveCard',
                                data : JSON.stringify(params),
                                contentType : 'application/json',
                                type : 'POST',
                                error: function() { 
                                    submitting = false;  
                                    $modal.remove();
                                },
                                success: function(data) {
                                    var $xmlData = $(data),
                                        status = $xmlData.find('trusteeresponse status').text(),
                                        error = $xmlData.find('trusteeresponse error').text(),
                                        last4 = $xmlData.find('trusteeresponse cc').text();
        
                                    if(!error && last4) {
                                        $('#trusteeApiToken').val(trusteeApiToken);
                                        $('#last4').val(last4);
                                        
                                        $form.submit();
                                    } else {
                                        alert('Unable to save credit card information. ' + status + ': ' + error);
                                    }
                                }
                            });
                        }).fail(function() { 
                            submitting = false;  
                            $modal.remove();
                        });
                    }
                    else {
                        $form.submit();
                    }
                });
            }
    
            function initCustomizeForm() {
                $.get('/wp-json/pet-quote/v1/getPricingMatrix')
                .done(function(pricingMatrix) {
    
                    $.each($('.tcpc.customize .pet'), function(i, e) {                    
                        var $pet = $(e);
                        var petId = $pet.attr('data-pet-id');
                        var petPricing = pricingMatrix.find(function(pet) { return pet['petId'] == petId });
                        var selectedLimits = petPricing.selectedLimits;
                        var $coverageLimitId = $pet.find('.coverageLimitId');
                        var $deductibleId = $pet.find('.deductibleId');
                        var $coinsuranceId = $pet.find('.coinsuranceId');
    
                        $('.plan[data-coverage-limit-id="' + selectedLimits.coverageLimitId + '"][data-pet-index="' + i.toString() + '"]').addClass('active');
    
                        function updatePlanPricing(coverageLimitId, deductibleId, coinsuranceId) {
                            var coveragePricing = petPricing.pricingMatrix.filter(function(price) {
                                return price.limits.deductibleId == deductibleId && price.limits.coinsuranceId == coinsuranceId;
                            });
    
                            for(var coverage of coveragePricing)
                            {
                                $pet.find('.plan[data-coverage-limit-id="' + coverage.limits.coverageLimitId + '"] .plan-price strong').text('$' + coverage.monthlyInstallment.toFixed(2));
                            }
    
                            var selectedCoverage = coveragePricing.find(function(price) {
                                return price.limits.coverageLimitId == coverageLimitId;
                            });
                            
                            if(!selectedCoverage) {
                                selectedCoverage = {
                                    wellnessOptions: [],
                                    upgradeOptions: [],
                                }
                            }
    
                            for(var wellnessOption of selectedCoverage.wellnessOptions) {
                                $pet.find('.wellness-upgrades .upgrade[data-wellness-upgrade-id="' + wellnessOption.display + '"] .price').text('+$' + Math.floor(wellnessOption.monthlyInstallment) + '/mo');
                            }
                            
                            for(var upgradeOption of selectedCoverage.upgradeOptions) {
                                $pet.find('.coverage-upgrades .upgrade[data-coverage-upgrade-id="' + upgradeOption.display + '"] .price').text('+$' + upgradeOption.monthlyInstallment.toFixed(2) + '/mo');
                            }
    
                        }
    
                        updatePlanPricing(selectedLimits.coverageLimitId, selectedLimits.deductibleId, selectedLimits.coinsuranceId);
    
                        $pet.find('.plan').click(function() {
                            $(this).siblings('.plan').removeClass('active');
                            $(this).addClass('active');
                            $coverageLimitId.val($(this).attr('data-coverage-limit-id')).trigger('change');
                        });
            
                        $pet.find('.wellness-upgrades .upgrade-click-area').click(function() {
                            var $input = $(this).parent().find('input');
                            $input.prop('checked', true).trigger('change');
                        });
            
                        $pet.find('.coverage-upgrades .upgrade-click-area').click(function() {
                            var $input = $(this).parent().find('input');
                            var checked = $input.prop('checked');
                            $input.prop('checked', !checked).trigger('change');
                        });
    
                        $pet.on('change', 'input,select', function(e) {
                            var data = {
                                    petId: petId,
                                    coverageLimitId: parseInt($coverageLimitId.val()),
                                    deductibleId: parseInt($deductibleId.val()),
                                    coinsuranceId: parseInt($coinsuranceId.val()),
                                    wellnessUpgrade: $pet.find('input.wellnessUpgrade:checked').val(),
                                    coverageUpgrade: $pet.find('input.coverageUpgrade:checked').toArray().map((item) => $(item).val())
                            };
    
                            updatePlanPricing(data.coverageLimitId, data.deductibleId, data.coinsuranceId);
    
                            $('.monthly-price .price strong').empty();
                            $('.pet .monthly-installment').empty();
    
                            var $monthlyRateSpinner = createSpinner('.monthly-price .price strong');
                            var $petRatesSpinner = createSpinner('.pet .monthly-installment');
            
                            $.ajax({
                                url: '/wp-json/pet-quote/v1/savePetOptions',
                                data : JSON.stringify(data),
                                contentType : 'application/json',
                                type : 'POST',
                                success: function(data) {
                                    var totalMonthlyPremium = data.totalMonthlyPremium;
                                    $('.monthly-price .price strong').text('$' + totalMonthlyPremium.toFixed(2));
                                    $monthlyRateSpinner.remove();
    
                                    for(var pet of data.pets) {
                                        $('.pet[data-pet-id="' + pet.petId + '"] .monthly-installment').text('$' + pet.monthlyPremium.toFixed(2));
                                    }
            
                                    $petRatesSpinner.remove();
                                }
                            });
                        });
                    });
                });
    
                function renderCustomizeForm() {
                    $.ajax({
                        url: '/wp-json/pet-quote/v1/renderCustomize',
                        data: JSON.stringify({}),
                        contentType: 'application/json',
                        type: 'POST',
                        success: function(customizeHtml) {
                            var customizeForm = $('#tcpc-customize-form');
                            var customizeFormParent = customizeForm.parent();
    
                            customizeForm.remove();
                            customizeFormParent.html(customizeHtml);
                            initCustomizeForm();
                        }
                    })
                }
    
                function hideCustomizeFormForTrial(petIndex) {
                    // Hide customization section
                    $(`.customize-body[data-pet-index="${petIndex}"]`).css('display', 'none');
                    
                    // Show $0.00 for prices
                    $('#monthly-installment').css('display', 'none');
                    $('#trial-only-installment').css('display', 'block');
    
                    $('#monthly-total').css('display', 'none');
                    $('#trial-only-total').css('display', 'block');
    
                    $('#transaction-fee-warning').css('display', 'none');
                }
    
                function hideTrialPrices() {
                    // Hide $0.00 prices
                    $('#monthly-installment').css('display', 'block');
                    $('#trial-only-installment').css('display', 'none');
    
                    $('#monthly-total').css('display', 'block');
                    $('#trial-only-total').css('display', 'none');
    
                    $('#transaction-fee-warning').css('display', 'block');
                }
    
                $('.select-trial-coverage').click(function(e) {
                    let selectionButton = $(this);
                    let petIndex = selectionButton.attr('data-pet-index');
    
                    $.ajax({
                        url: '/wp-json/pet-quote/v1/selectTrial',
                        data: JSON.stringify({trialSelection: 'trial', petIndex}),
                        contentType: 'application/json',
                        type: 'POST',
                        success: function(data) {
                            // Hide trial selection button
                            // [data-pet-index="' + i.toString() + '"]
                            $(`.select-trial-coverage[data-pet-index="${petIndex}"]`).css('display', 'none');
    
                            // Show trial selected checkmark
                            $(`.selected-trial-coverage[data-pet-index="${petIndex}"]`).css('display', 'block');
    
                            // Show both/custom selection buttons, hide both/custom checkmarks
                            $(`.select-both-coverage[data-pet-index="${petIndex}"]`).css('display', 'block');
                            $(`.select-custom-coverage[data-pet-index="${petIndex}"]`).css('display', 'block');
                            $(`.selected-both-coverage[data-pet-index="${petIndex}"]`).css('display', 'none');
                            $(`.selected-custom-coverage[data-pet-index="${petIndex}"]`).css('display', 'none');
                            
                            // Set checkout button text
                            $('.checkout-button').text('Activate');
    
                            hideCustomizeFormForTrial();
                            renderCustomizeForm();
                        },
                        error: function(jqXHR, textStatus, errorThrown) {
                                            
                        }
                    })
                });
    
                $('.select-both-coverage').click(function(e) {
                    let selectionButton = $(this);
                    let petIndex = selectionButton.attr('data-pet-index');
    
                    $.ajax({
                        url: '/wp-json/pet-quote/v1/selectTrial',
                        data: JSON.stringify({trialSelection: 'both', petIndex}),
                        contentType: 'application/json',
                        type: 'POST',
                        success: function(data) {
                            // Hide both selection button
                            $(`.select-both-coverage[data-pet-index="${petIndex}"]`).css('display', 'none');
    
                            // Show both selected checkmark
                            $(`.selected-both-coverage[data-pet-index="${petIndex}"]`).css('display', 'block');
    
                            // Show trial/custom selection buttons, hide trial/custom checkmarks
                            $(`.select-trial-coverage[data-pet-index="${petIndex}"]`).css('display', 'block');
                            $(`.select-custom-coverage[data-pet-index="${petIndex}"]`).css('display', 'block');
                            $(`.selected-trial-coverage[data-pet-index="${petIndex}"]`).css('display', 'none');
                            $(`.selected-custom-coverage[data-pet-index="${petIndex}"]`).css('display', 'none');
                            
                            // Set checkout button text
                            $('.checkout-button').text('Activate');
    
                            // Show customization section
                            $(`.customize-body[data-pet-index="${petIndex}"]`).css('display', 'block');
    
                            hideTrialPrices();
                            renderCustomizeForm();
    
                        },
                        error: function(jqXHR, textStatus, errorThrown) {
                                            
                        }
                    })
                });
    
                $('.select-custom-coverage').click(function(e) {
                    let selectionButton = $(this);
                    let petIndex = selectionButton.attr('data-pet-index');
    
                    $.ajax({
                        url: '/wp-json/pet-quote/v1/selectTrial',
                        data: JSON.stringify({trialSelection: 'custom', petIndex}),
                        contentType: 'application/json',
                        type: 'POST',
                        success: function(data) {
                            // Hide custom selection button
                            $(`.select-custom-coverage[data-pet-index="${petIndex}"]`).css('display', 'none');
    
                            // Show custom selected checkmark
                            $(`.selected-custom-coverage[data-pet-index="${petIndex}"]`).css('display', 'block');
    
                            // Show trial/both selection buttons, hide trial/both checkmarks
                            $(`.select-trial-coverage[data-pet-index="${petIndex}"]`).css('display', 'block');
                            $(`.select-both-coverage[data-pet-index="${petIndex}"]`).css('display', 'block');
                            $(`.selected-trial-coverage[data-pet-index="${petIndex}"]`).css('display', 'none');
                            $(`.selected-both-coverage[data-pet-index="${petIndex}"]`).css('display', 'none');
    
                            // Show customization section
                            $(`.customize-body[data-pet-index="${petIndex}"]`).css('display', 'block');
                            
                            // Set checkout button text
                            $('.checkout-button').text('Checkout');
    
                            hideTrialPrices();                        
                            renderCustomizeForm();
                        },
                        error: function(jqXHR, textStatus, errorThrown) {
                                            
                        }
                    })
                });
    
                $('.coverage-comparison-header').click(function(e) {
                    let headerBar = $(this);
    
                    let petIndex = headerBar.attr('data-pet-index');
                    let collapsed = headerBar.attr('data-collapsed');
    
                    if(collapsed === 'true') {
                        $(`.coverage-comparison-up-arrow[data-pet-index="${petIndex}"]`).css('display', 'block');
                        $(`.coverage-comparison-down-arrow[data-pet-index="${petIndex}"]`).css('display', 'none');
                        $(`.coverage-comparison-body[data-pet-index="${petIndex}"]`).css('display', 'block');
                        headerBar.attr('data-collapsed', 'false');
                        headerBar.css('border-radius', '15px 15px 0px 0px'); 
                        $(`.coverage-comparison-header-text[data-pet-index="${petIndex}"]`).text('Hide our coverage comparison');
                    }
    
                    if(collapsed === 'false') {
                        $(`.coverage-comparison-up-arrow[data-pet-index="${petIndex}"]`).css('display', 'none');
                        $(`.coverage-comparison-down-arrow[data-pet-index="${petIndex}"]`).css('display', 'block');
                        $(`.coverage-comparison-body[data-pet-index="${petIndex}"]`).css('display', 'none');
                        headerBar.attr('data-collapsed', 'true');
                        headerBar.css('border-radius', '15px'); 
                        $(`.coverage-comparison-header-text[data-pet-index="${petIndex}"]`).text('Show our coverage comparison');
                    }
    
                    console.log(petIndex);
                    console.log(collapsed);
                });
            }
    
            if($('.tcpc.customize').length > 0) {
                initCustomizeForm();
            }
    
            if($('.tcpc.pet-lookup').length > 0) {
                $('#show-pet-lookup-form').click(function(e) {                
                    $('#pet-lookup-form').css('display', 'block');
                    $('#show-pet-lookup-form').css('display', 'none');
                });
    
                $('#hide-pet-lookup-form').click(function(e) {                
                    $('#pet-lookup-form').css('display', 'none');
                    $('#show-pet-lookup-form').css('display', 'block');
                });
    
                $('#close-pet-lookup-error').click(function(e) {                
                    $('#pet-lookup-error').css('display', 'none');
                });     
    
                $('#close-pet-lookup-not-eligible').click(function(e) {                
                    $('#pet-lookup-not-eligible').css('display', 'none');
                });                             
    
                $('#pet-lookup-form').submit(function(e) {
                    e.preventDefault();
    
                    var regNo = $('#regNo').val();
                    var postalCode = $('#postalCode').val();
    
                    if(!regNo || !postalCode) {
                        return;
                    }
    
                    $.ajax({
                        url: '/wp-json/pet-quote/v1/lookupPet',
                        data: JSON.stringify({regNo, postalCode}),
                        contentType: 'application/json',
                        type: 'POST',
                        success: function(data) {
                            if(data?.petName) {
                                $('#pet_name').val(data.petName);
                            }
                            if(data?.ageYears || typeof data?.ageYears === 'number') {
                                $('#pet_age').val(data.ageYears);
                                $('#pet_age').trigger('change');
                            }
                            if(data?.postalCode) {
                                $('#zip_code').val(data.postalCode);
                            }
                            if(data?.breedId || typeof data?.breedId === 'number') {
                                $('#pet_breed').val(data.breedId);
                                $('#pet_breed').trigger('change');
                            }
                            if(data?.email) {
                                $('#email').val(data.email);
                            }
                            if(data?.phone) {
                                $('#phone').val(data.phone);
                            }
                            if(data?.regNo) {
                                $('#hiddenRegNo').val(data.regNo);
                            }
                            if(data?.genderId || typeof data?.regNo === 'number') {
                                $(`[id='pet_gender'][value='${data.genderId}']`).prop('checked', true);
                            }
                            if(data?.isTrialEligible === false && data?.trialEligibilityStatusMessage) {                            
                                $('#pet-lookup-not-eligible-text').text(data.trialEligibilityStatusMessage)
                                $('#pet-lookup-not-eligible').css('display', 'flex');
                            }
                        },
                        error: function(jqXHR, textStatus, errorThrown) {
                            $('#pet-lookup-error').css('display', 'flex');                        
                        }
                    })
                });
            }
    
            if($('.tcpc.select-coverage').length > 0) {
    
            }
        })
    })(jQuery);